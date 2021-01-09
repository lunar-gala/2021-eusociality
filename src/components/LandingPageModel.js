/**
 * Landing page 3D asset.
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cube_frag from '../../assets/models/cube_frag/reducedpoly_partial.gltf'

import * as TWEEN from '@tweenjs/tween.js';

import ThinFilmFresnelMap from '../lib/ThinFilmFresnelMap';
import IridescentMaterial from '../lib/IridescentMaterial';
import * as CONSTANTS from '../constants';

/**
 * Import HDR map
 *
 * This defines a 6-faced cube that is the "world" around the object. This is
 * used in iridescence texture to calculate light diffusion.
 */
import irradiance_negX from '../../assets/models/skybox/irradiance/negX.jpg';
import irradiance_negY from '../../assets/models/skybox/irradiance/negY.jpg';
import irradiance_negZ from '../../assets/models/skybox/irradiance/negZ.jpg';
import irradiance_posX from '../../assets/models/skybox/irradiance/posX.jpg';
import irradiance_posY from '../../assets/models/skybox/irradiance/posY.jpg';
import irradiance_posZ from '../../assets/models/skybox/irradiance/posZ.jpg';
import radiance_negX from '../../assets/models/skybox/radiance/negX.jpg';
import radiance_negY from '../../assets/models/skybox/radiance/negY.jpg';
import radiance_negZ from '../../assets/models/skybox/radiance/negZ.jpg';
import radiance_posX from '../../assets/models/skybox/radiance/posX.jpg';
import radiance_posY from '../../assets/models/skybox/radiance/posY.jpg';
import radiance_posZ from '../../assets/models/skybox/radiance/posZ.jpg';

/*** CAMERA PARAMETERS ***/
const CAMERA_POSITION = {
  x: 0,
  y: 30,
  z: 400
};

/** @brief Starting position of the object */
const OBJECT_POSITION = {
  x: 200,
  y: 0,
  z: 0
}

/** @brief How much the camera tilts on mouse move */
const CAMERA_PAN_FACTOR = {
  x: 10,
  y: 10,
  z: 10
};

class LandingPageModel extends React.Component {
  constructor(props) {
    super(props);

    /*** Initialization ***/
    this.state = {
      /** @brief Mouse position x */
      x: 0,
      /** @brief Mouse position y */
      y: 0,
      /** @brief Window width, including resizing */
      width: 0,
      /** @brief Window height, including resizing */
      height: 0,
      /** @brief 3D camera */
      camera: null,
    };

    // Keep track of window width
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  /**
   * Triggered every time the mouse moves.
   *
   * We do this for:
   * - Moving the camera on the 3d asset in the back
   *
   * TODO: implement gyroscope check for mobile, and make sure that we disable
   * mouse move detection on mobile
   *
   * @param {MouseEvent} e The mouse movement event
   */
  _onMouseMove(e) {
    let x = e.screenX;
    let y = e.screenY;
    let width = this.state.width;
    let height= this.state.height;

    // Offset for the camera
    let offset_x = (x - width/2)/(width/2);
    let offset_y = -(y - height/2)/(height/2);

    this.setState({ x: offset_x, y: offset_y });

    // TODO: animate this movement so it is smoother
    this.state.camera.position.set(
      CAMERA_POSITION.x + offset_x*CAMERA_PAN_FACTOR.x,
      CAMERA_POSITION.y + offset_y*CAMERA_PAN_FACTOR.y,
      CAMERA_POSITION.z - Math.sqrt(offset_x**2 + offset_y**2)*CAMERA_PAN_FACTOR.z
    );

    // this.state.camera.lookAt(0, 0, 0);
  }

  loadCubeMap (map) {
    let files = [
      radiance_negX,
      radiance_negY,
      radiance_negZ,
      radiance_posX,
      radiance_posY,
      radiance_posZ
    ];

    if (map === 'irradiance') {
      files = [
        irradiance_negX,
        irradiance_negY,
        irradiance_negZ,
        irradiance_posX,
        irradiance_posY,
        irradiance_posZ
      ];
    }

    var loader = new THREE.CubeTextureLoader();
    return loader.load(files);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener("deviceorientation", this.handleOrientation, true);

    const canvas = document.querySelector('#landing-page-cube');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    /* Set up camera */
    const fov = 75;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 1000;
    let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.set(
      CAMERA_POSITION.x,
      CAMERA_POSITION.y,
      CAMERA_POSITION.z
    );

    this.setState({camera : camera});

    const scene = new THREE.Scene();
    const controls = new OrbitControls(camera, renderer.domElement);
    const clock = new THREE.Clock();
    let mixer = null;

    // Add a light and background
    scene.background = new THREE.Color( CONSTANTS.LANDING_PAGE_BACKGROUND_COLOR );
    const light_color = 0xFFFFFF;
    const light_intensity = 0.5;
    const light_amb = new THREE.AmbientLight(light_color, light_intensity);
    scene.add(light_amb);

    /* Add object */
    const gltf_loader = new GLTFLoader();
    let radiance = this.loadCubeMap('radiance');
    let irradiance = this.loadCubeMap('irradiance');
    let iridescence_texture = new ThinFilmFresnelMap(
      CONSTANTS.IRIDESCENCE_FILM_THICKNESS,
      CONSTANTS.IRIDESCENCE_REFRACTIVE_INDEX_FILM,
      CONSTANTS.IRIDESCENCE_REFRACTIVE_INDEX_BASE,
      CONSTANTS.IRIDESCENCE_FILM_SIZE
    );
    let iridescence_material = new IridescentMaterial(irradiance, radiance, iridescence_texture);

    gltf_loader.load(
      cube_frag,
      // called when resource is loaded
      (object) => {
        let object_children = object.scene.children[0].children;

        for (let i = 0; i < object_children.length; i++) {
          object_children[i].children[1].material = iridescence_material;
        }

        console.log(object);


        scene.add(object.scene);

        // Starting position of the 3d asset. We want to offset it to the right.
        object.scene.position.set(
          OBJECT_POSITION.x,
          OBJECT_POSITION.y,
          OBJECT_POSITION.z
        );

        // TODO: set to the scene camera
        // camera = object.cameras[0];

        mixer = new THREE.AnimationMixer( object.scene );
        let action = mixer.clipAction( object.animations[0] );
        action.setLoop(THREE.LoopOnce);
        action.play();
      },
      // called when loading is in progresses
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      // called when loading has errors
      (error) => {
        console.log('An error happened', error);
      }
    );

    // Resize if needed
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    // requestAnimationFrame passes time in as seconds
    function render_cube (time) {
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      controls.update();

      renderer.render(scene, camera);

      requestAnimationFrame(render_cube);

      var delta = clock.getDelta();

      if ( mixer ) mixer.update( delta );

      TWEEN.update(time);
    }

    requestAnimationFrame(render_cube);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('deviceorientation', this.handleOrientation);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  /**
   * Used to provide a tilting effect from a phone
   *
   * @param {*} event From the phone tilting event
   */
  handleOrientation(event) {
    /*
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    */
  }

  render () {
    return <div
      className={`landing-page-background ${this.props.landing_page_state}`}
      onMouseMove={this._onMouseMove.bind(this)}>
      <canvas id='landing-page-cube' />
    </div>;
  }
}

LandingPageModel.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired
}

export default LandingPageModel;