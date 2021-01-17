/**
 * @classdesc
 * A minimal example to show how the texture can be used.
 *
 * @property irradianceProbe A cube map containing diffuse lighting information.
 * @property radianceProbe A cube map containing specular lighting information.
 * @property iridescenceLookUp An instance of ThinFilmFresnelMap.
 * @property color The base color of the material.
 * @property boost A value to magically boost the iridescent reflections.
 *
 * @constructor
 * @param irradianceProbe A cube map containing diffuse lighting information.
 * @param radianceProbe A cube map containing specular lighting information.
 * @param boost How much glow the iridescence texture will have.
 * @param iridescenceLookUp An instance of ThinFilmFresnelMap.
 *
 * @author David Lenaerts <http://www.derschmale.com>
 */

import * as THREE from 'three';

export default function IridescentMaterial(irradianceProbe, radianceProbe, boost, iridescenceLookUp) {
  var materialUniforms =
    {
      irradianceProbe: {
        value: irradianceProbe
      },
      radianceProbe: {
        value: radianceProbe
      },
      iridescenceLookUp: {
        value: iridescenceLookUp
      },
      color: {
        value: new THREE.Color(1.0, 1.0, 1.0)
      },
      boost: {
        value: boost
      }
    };

  const vertexShader = `
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;

    void main() {
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        vec4 viewPos = modelViewMatrix * vec4(position,1.0);
        vWorldNormal = mat3(modelMatrix) * normalize(normal);
        gl_Position = projectionMatrix * viewPos;
    }`;

  const fragmentShader = `
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;

    uniform vec3 color;
    uniform float boost;
    uniform samplerCube radianceProbe;
    uniform samplerCube irradianceProbe;
    uniform sampler2D iridescenceLookUp;

    void main() {
        vec3 viewWorldDir = normalize(vWorldPosition - cameraPosition);
        vec3 normal = normalize(vWorldNormal);
        vec3 viewNormal = mat3(viewMatrix) * normal;
        vec3 albedo = color;
        vec3 diffuseLight = vec3(0.0);
        vec3 specularLight = vec3(0.0);

        vec3 reflectedView = reflect(viewWorldDir, normal);
        float NdotV = max(-dot(viewWorldDir, normal), 0.0);
        float fresnelFactor = pow(1.0 - NdotV, 5.0);

        vec3 airy = texture2D(iridescenceLookUp, vec2(NdotV * .99, 0.0)).xyz;
        airy *= airy;

        vec4 reflectionSample = textureCube(radianceProbe, reflectedView);
        specularLight = reflectionSample.xyz * reflectionSample.xyz * airy * boost;

        vec4 diffuseSample = textureCube(irradianceProbe, normal);
        diffuseLight = diffuseSample.xyz * diffuseSample.xyz;

        vec3 final = albedo * diffuseLight + specularLight;

        gl_FragColor = vec4(sqrt(final), 1.0);
    }`;

  THREE.ShaderMaterial.call(this,
    {
      uniforms: materialUniforms,

      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    }
  );

  this.extensions.derivatives = true;
}

IridescentMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype, {
  radianceProbe: {
    get: function() {
      return this.uniforms.radianceProbe.value;
    },
    set: function(value) {
      this.uniforms.radianceProbe.value = value;
    }
  },
  irradianceProbe: {
    get: function() {
      return this.uniforms.irradianceProbe.value;
    },
    set: function(value) {
      this.uniforms.irradianceProbe.value = value;
    }
  },
  iridescenceLookUp: {
    get: function() {
      return this.uniforms.iridescenceLookUp.value;
    },
    set: function(value) {
      this.uniforms.iridescenceLookUp.value = value;
    }
  },
  color: {
    get: function() {
      return this.uniforms.color.value;
    },

    set: function(value) {
      this.uniforms.color.value = value;
    }
  },
  boost: {
    get: function() {
      return this.uniforms.boost.value;
    },

    set: function(value) {
      this.uniforms.boost.value = value;
    }
  }
});