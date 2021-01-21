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
 * @param baseTextureRatio How much weight to give the base cube texture.
 * @param iridescenceRatio How much weight to give the iridescence texture.
 * @param brightness An instance of ThinFilmFresnelMap.
 * @param textureZoom How much to zoom into the texture.
 *
 * @author David Lenaerts <http://www.derschmale.com>
 */

import * as THREE from 'three';

/**
 * Import additional cube textures.
 */
import cube_texture_image from '../../assets/models/cube_frag/cube_texture.jpg';

export default function IridescentMaterial(
  irradianceProbe,
  radianceProbe,
  boost,
  iridescenceLookUp,
  baseTextureRatio = 0,
  iridescenceRatio = 1,
  brightness = 1,
  textureZoom = 1
) {
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
      },
      baseTexture: {
        type: 't',
        value: new THREE.TextureLoader().load(cube_texture_image)
      },
      baseTextureRatio: {
        value: baseTextureRatio
      },
      iridescenceRatio: {
        value: iridescenceRatio
      },
      brightness: {
        value: brightness
      },
      textureZoom: {
        value: textureZoom
      }
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

        // Add in additional base texture
        vec2 zoom = vec2(textureZoom, textureZoom);
        vec4 baseTexture = texture2D(baseTexture, vUv * zoom);

        // Blend in the two textures
        vec3 finalTexture = (final_iridescence.rgb * iridescenceRatio + baseTexture.rgb * baseTextureRatio) * brightness;

        gl_FragColor = vec4(finalTexture, 1.0);
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
  },
  baseTexture: {
    get: function() {
      return this.uniforms.baseTexture.value;
    },

    set: function(value) {
      this.uniforms.baseTexture.value = value;
    }
  },
  iridescenceRatio: {
    get: function() {
      return this.uniforms.iridescenceRatio.value;
    },

    set: function(value) {
      this.uniforms.iridescenceRatio.value = value;
    }
  },
  baseTextureRatio: {
    get: function() {
      return this.uniforms.baseTextureRatio.value;
    },

    set: function(value) {
      this.uniforms.baseTextureRatio.value = value;
    }
  },
  brightness: {
    get: function() {
      return this.uniforms.brightness.value;
    },

    set: function(value) {
      this.uniforms.brightness.value = value;
    }
  },
  textureZoom: {
    get: function() {
      return this.uniforms.textureZoom.value;
    },

    set: function(value) {
      this.uniforms.textureZoom.value = value;
    }
  }
});