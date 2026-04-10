/**
 * @classdesc
 * ThinFilmFresnelMap is a lookup texture containing the reflection colour.
 * The texture index value is dot(normal, view). The texture values are stored
 * in approximated gamma space (power 2.0), so the sampled value needs to be
 * multiplied with itself before use. The sampled value should replace the
 * fresnel factor in a PBR material.
 *
 * @extends DataTexture
 *
 * @author David Lenaerts <http://www.derschmale.com>
 *
 * @license MIT License
 *
 * Copyright (c) 2019 David Lenaerts
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {
  DataTexture,
  MathUtils,
  RGBAFormat,
  UnsignedByteType,
  UVMapping,
  RepeatWrapping,
  LinearFilter,
  LinearMipMapLinearFilter,
  Vector2,
} from "three";

export default class ThinFilmFresnelMap extends DataTexture {
  constructor(filmThickness, refractiveIndexFilm, refractiveIndexBase, size) {
    const _size = size || 64;
    const _data = new Uint8Array(_size * 4);

    super(
      _data,
      _size,
      1,
      RGBAFormat,
      UnsignedByteType,
      UVMapping,
      RepeatWrapping,
      RepeatWrapping,
      LinearFilter,
      LinearMipMapLinearFilter
    );

    this._filmThickness = filmThickness || 380.0;
    this._refractiveIndexFilm = refractiveIndexFilm || 2;
    this._refractiveIndexBase = refractiveIndexBase || 3;
    this._size = _size;
    this._data = _data;

    this._updateData();
    this.generateMipmaps = true;
    this.needsUpdate = true;
  }

  get filmThickness() {
    return this._filmThickness;
  }
  set filmThickness(value) {
    this._filmThickness = value;
    this.updateSettings(this._filmThickness, this._refractiveIndexFilm, this._refractiveIndexBase);
  }

  get refractiveIndexFilm() {
    return this._refractiveIndexFilm;
  }
  set refractiveIndexFilm(value) {
    this._refractiveIndexFilm = value;
    this.updateSettings(this._filmThickness, this._refractiveIndexFilm, this._refractiveIndexBase);
  }

  get refractiveIndexBase() {
    return this._refractiveIndexBase;
  }
  set refractiveIndexBase(value) {
    this._refractiveIndexBase = value;
    this.updateSettings(this._filmThickness, this._refractiveIndexFilm, this._refractiveIndexBase);
  }

  updateSettings(filmThickness, refractiveIndexFilm, refractiveIndexBase) {
    this._filmThickness = filmThickness || 380;
    this._refractiveIndexFilm = refractiveIndexFilm || 2;
    this._refractiveIndexBase = refractiveIndexBase || 3;
    this._updateData();
  }

  _fresnelRefl(refractiveIndex1, refractiveIndex2, cos1, cos2, R, phi) {
    var sin1Sqr = 1.0 - cos1 * cos1;
    var refrRatio = refractiveIndex1 / refractiveIndex2;

    if (refrRatio * refrRatio * sin1Sqr > 1.0) {
      R.x = 1.0;
      R.y = 1.0;
      var sqrRefrRatio = refrRatio * refrRatio;
      phi.x = 2.0 * Math.atan(-sqrRefrRatio * Math.sqrt(sin1Sqr - 1.0 / sqrRefrRatio) / cos1);
      phi.y = 2.0 * Math.atan(-Math.sqrt(sin1Sqr - 1.0 / sqrRefrRatio) / cos1);
    } else {
      var r_p = (refractiveIndex2 * cos1 - refractiveIndex1 * cos2) / (refractiveIndex2 * cos1 + refractiveIndex1 * cos2);
      var r_s = (refractiveIndex1 * cos1 - refractiveIndex2 * cos2) / (refractiveIndex1 * cos1 + refractiveIndex2 * cos2);
      phi.x = r_p < 0.0 ? Math.PI : 0.0;
      phi.y = r_s < 0.0 ? Math.PI : 0.0;
      R.x = r_p * r_p;
      R.y = r_s * r_s;
    }
  }

  _updateData() {
    var filmThickness = this._filmThickness;
    var refractiveIndexFilm = this._refractiveIndexFilm;
    var refractiveIndexBase = this._refractiveIndexBase;
    var size = this._size;

    function xFit_1931(lambda) {
      var t1 = (lambda - 442.0) * ((lambda < 442.0) ? 0.0624 : 0.0374);
      var t2 = (lambda - 599.8) * ((lambda < 599.8) ? 0.0264 : 0.0323);
      var t3 = (lambda - 501.1) * ((lambda < 501.1) ? 0.0490 : 0.0382);
      return 0.362 * Math.exp(-0.5 * t1 * t1) + 1.056 * Math.exp(-0.5 * t2 * t2) - 0.065 * Math.exp(-0.5 * t3 * t3);
    }

    function yFit_1931(lambda) {
      var t1 = (lambda - 568.8) * ((lambda < 568.8) ? 0.0213 : 0.0247);
      var t2 = (lambda - 530.9) * ((lambda < 530.9) ? 0.0613 : 0.0322);
      return 0.821 * Math.exp(-0.5 * t1 * t1) + 0.286 * Math.exp(-0.5 * t2 * t2);
    }

    function zFit_1931(lambda) {
      var t1 = (lambda - 437.0) * ((lambda < 437.0) ? 0.0845 : 0.0278);
      var t2 = (lambda - 459.0) * ((lambda < 459.0) ? 0.0385 : 0.0725);
      return 1.217 * Math.exp(-0.5 * t1 * t1) + 0.681 * Math.exp(-0.5 * t2 * t2);
    }

    var data = this._data;
    var phi12 = new Vector2();
    var phi21 = new Vector2();
    var phi23 = new Vector2();
    var R12 = new Vector2();
    var T12 = new Vector2();
    var R23 = new Vector2();
    var R_bi = new Vector2();
    var T_tot = new Vector2();
    var R_star = new Vector2();
    var R_bi_sqr = new Vector2();
    var R_12_star = new Vector2();
    var R_star_t_tot = new Vector2();

    var refrRatioSqr = 1.0 / (refractiveIndexFilm * refractiveIndexFilm);
    var refrRatioSqrBase = (refractiveIndexFilm * refractiveIndexFilm) / (refractiveIndexBase * refractiveIndexBase);

    var numBands = 64;
    var waveLenRange = 780 - 380;

    for (var i = 0; i < size; ++i) {
      var cosThetaI = i / size;
      var cosThetaT = Math.sqrt(1 - refrRatioSqr * (1.0 - cosThetaI * cosThetaI));
      var cosThetaT2 = Math.sqrt(1 - refrRatioSqrBase * (1.0 - cosThetaT * cosThetaT));

      var pathDiff = 2.0 * refractiveIndexFilm * filmThickness * cosThetaT;
      var pathDiff2PI = 2.0 * Math.PI * pathDiff;

      this._fresnelRefl(1.0, refractiveIndexFilm, cosThetaI, cosThetaT, R12, phi12);
      T12.x = 1.0 - R12.x;
      T12.y = 1.0 - R12.y;
      phi21.x = Math.PI - phi12.x;
      phi21.y = Math.PI - phi12.y;

      this._fresnelRefl(refractiveIndexFilm, refractiveIndexBase, cosThetaT, cosThetaT2, R23, phi23);
      R_bi.x = Math.sqrt(R23.x * R12.x);
      R_bi.y = Math.sqrt(R23.y * R12.y);
      T_tot.x = Math.sqrt(T12.x * T12.x);
      T_tot.y = Math.sqrt(T12.y * T12.y);
      R_star.x = (T12.x * T12.x * R23.x) / (1.0 - R23.x * R12.x);
      R_star.y = (T12.y * T12.y * R23.y) / (1.0 - R23.y * R12.y);
      R_bi_sqr.x = R_bi.x * R_bi.x;
      R_bi_sqr.y = R_bi.y * R_bi.y;
      R_12_star.x = R12.x + R_star.x;
      R_12_star.y = R12.y + R_star.y;
      R_star_t_tot.x = R_star.x - T_tot.x;
      R_star_t_tot.y = R_star.y - T_tot.y;
      var x = 0, y = 0, z = 0;
      var totX = 0, totY = 0, totZ = 0;

      for (var j = 0; j < numBands; ++j) {
        var waveLen = 380 + j / (numBands - 1) * waveLenRange;
        var deltaPhase = pathDiff2PI / waveLen;

        var cosPhiX = Math.cos(deltaPhase + phi23.x + phi21.x);
        var cosPhiY = Math.cos(deltaPhase + phi23.y + phi21.y);
        var valX = R_12_star.x + 2.0 * (R_bi.x * cosPhiX - R_bi_sqr.x) / (1.0 - 2 * R_bi.x * cosPhiX + R_bi_sqr.x) * R_star_t_tot.x;
        var valY = R_12_star.y + 2.0 * (R_bi.y * cosPhiY - R_bi_sqr.y) / (1.0 - 2 * R_bi.y * cosPhiY + R_bi_sqr.y) * R_star_t_tot.y;
        var v = .5 * (valX + valY);

        var wx = xFit_1931(waveLen);
        var wy = yFit_1931(waveLen);
        var wz = zFit_1931(waveLen);

        totX += wx;
        totY += wy;
        totZ += wz;

        x += wx * v;
        y += wy * v;
        z += wz * v;
      }

      x /= totX;
      y /= totY;
      z /= totZ;

      var r = 3.2406 * x - 1.5372 * y - 0.4986 * z;
      var g = -0.9689 * x + 1.8758 * y + 0.0415 * z;
      var b = 0.0557 * x - 0.2040 * y + 1.0570 * z;

      r = MathUtils.clamp(r, 0.0, 1.0);
      g = MathUtils.clamp(g, 0.0, 1.0);
      b = MathUtils.clamp(b, 0.0, 1.0);

      r = Math.sqrt(r);
      g = Math.sqrt(g);
      b = Math.sqrt(b);

      var k = i << 2;
      data[k] = Math.floor(r * 0xff);
      data[k + 1] = Math.floor(g * 0xff);
      data[k + 2] = Math.floor(b * 0xff);
      data[k + 3] = 0xff;
    }

    this.needsUpdate = true;
  }
}
