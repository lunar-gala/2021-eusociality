/**
 * @classdesc
 * A material with thin-film iridescence effect using a custom shader.
 *
 * @author David Lenaerts <http://www.derschmale.com>
 */

import { ShaderMaterial, Color, TextureLoader } from "three";
import cube_texture_image from "../../assets/models/cube_frag/cube_texture.jpg";

export default class IridescentMaterial extends ShaderMaterial {
  constructor(
    irradianceProbe,
    radianceProbe,
    boost,
    iridescenceLookUp,
    baseTextureRatio = 0,
    iridescenceRatio = 1,
    brightness = 1,
    textureZoom = 1
  ) {
    const materialUniforms = {
      irradianceProbe: { value: irradianceProbe },
      radianceProbe: { value: radianceProbe },
      iridescenceLookUp: { value: iridescenceLookUp },
      color: { value: new Color(1.0, 1.0, 1.0) },
      boost: { value: boost },
      baseTexture: {
        type: "t",
        value: new TextureLoader().load(cube_texture_image),
      },
      baseTextureRatio: { value: baseTextureRatio },
      iridescenceRatio: { value: iridescenceRatio },
      brightness: { value: brightness },
      textureZoom: { value: textureZoom },
    };

    const vertexShader = `
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;

      void main() {
          vUv = uv;
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          vec4 viewPos = modelViewMatrix * vec4(position,1.0);
          vWorldNormal = mat3(modelMatrix) * normalize(normal);
          gl_Position = projectionMatrix * viewPos;
      }`;

    const fragmentShader = `
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;

      uniform vec3 color;
      uniform float boost;
      uniform float iridescenceRatio;
      uniform float baseTextureRatio;
      uniform float brightness;
      uniform float textureZoom;
      uniform samplerCube radianceProbe;
      uniform samplerCube irradianceProbe;
      uniform sampler2D iridescenceLookUp;
      uniform sampler2D baseTexture;

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
          vec3 final_iridescence = sqrt(final);

          vec2 zoom = vec2(textureZoom, textureZoom);
          vec4 baseTexture = texture2D(baseTexture, vUv * zoom);

          vec3 finalTexture = (final_iridescence.rgb * iridescenceRatio + baseTexture.rgb * baseTextureRatio) * brightness;

          gl_FragColor = vec4(finalTexture, 1.0);
      }`;

    super({
      uniforms: materialUniforms,
      vertexShader,
      fragmentShader,
    });

    this.extensions.derivatives = true;
  }

  // Uniform accessors — match the original API so LandingPage.jsx
  // can read/write these as plain properties.
  get radianceProbe() { return this.uniforms.radianceProbe.value; }
  set radianceProbe(v) { this.uniforms.radianceProbe.value = v; }

  get irradianceProbe() { return this.uniforms.irradianceProbe.value; }
  set irradianceProbe(v) { this.uniforms.irradianceProbe.value = v; }

  get iridescenceLookUp() { return this.uniforms.iridescenceLookUp.value; }
  set iridescenceLookUp(v) { this.uniforms.iridescenceLookUp.value = v; }

  get color() { return this.uniforms.color.value; }
  set color(v) { this.uniforms.color.value = v; }

  get boost() { return this.uniforms.boost.value; }
  set boost(v) { this.uniforms.boost.value = v; }

  get baseTexture() { return this.uniforms.baseTexture.value; }
  set baseTexture(v) { this.uniforms.baseTexture.value = v; }

  get iridescenceRatio() { return this.uniforms.iridescenceRatio.value; }
  set iridescenceRatio(v) { this.uniforms.iridescenceRatio.value = v; }

  get baseTextureRatio() { return this.uniforms.baseTextureRatio.value; }
  set baseTextureRatio(v) { this.uniforms.baseTextureRatio.value = v; }

  get brightness() { return this.uniforms.brightness.value; }
  set brightness(v) { this.uniforms.brightness.value = v; }

  get textureZoom() { return this.uniforms.textureZoom.value; }
  set textureZoom(v) { this.uniforms.textureZoom.value = v; }
}
