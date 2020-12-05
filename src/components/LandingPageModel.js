/**
 * Landing page 3D asset.
 */

import React from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cube_frag from '../../assets/models/cube_frag/cube_frag_compressed.obj';
import cube_frag_skin from '../../assets/models/cube_frag/cube_frag.mtl';

import * as TWEEN from '@tweenjs/tween.js';

// import ThinFilmFresnelMap from '../lib/ThinFilmFresnelMap';
import * as CONSTANTS from '../constants';

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
      CONSTANTS.CAMERA_POSITION.x + offset_x*CONSTANTS.CAMERA_PAN_X_FACTOR,
      CONSTANTS.CAMERA_POSITION.y + offset_y*CONSTANTS.CAMERA_PAN_Y_FACTOR,
      CONSTANTS.CAMERA_POSITION.z + Math.sqrt(offset_x**2 + offset_y**2)*CONSTANTS.CAMERA_PAN_Z_FACTOR
    );

    this.state.camera.lookAt(0, 0, 0);
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
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.set(
      CONSTANTS.CAMERA_POSITION.x,
      CONSTANTS.CAMERA_POSITION.y,
      CONSTANTS.CAMERA_POSITION.z
    );

    this.setState({camera : camera});

    const scene = new THREE.Scene();
    const controls = new OrbitControls(camera, renderer.domElement);

    // Add a light
    const color = 0xFFFFFF;
    const light_dir = new THREE.DirectionalLight(color, 0.75);
    const light_dir_2 = new THREE.DirectionalLight(color, 0.75);
    const light_dir_3 = new THREE.DirectionalLight(color, 0.75);
    const light_dir_4 = new THREE.DirectionalLight(color, 0.75);
    light_dir.position.set(-300, 300, 300);
    light_dir_2.position.set(300, 300, 300);
    light_dir_3.position.set(0, 1000, 0);
    light_dir_4.position.set(-300, 300, -300);
    // scene.add(light_amb);
    scene.add(light_dir);
    scene.add(light_dir_2);
    scene.add(light_dir_3);
    scene.add(light_dir_4);

    /* Add object */
    const obj_loader = new OBJLoader();
    const mtl_loader = new MTLLoader();
    // let tex = new ThinFilmFresnelMap(380, 2, 3, 64);
    // let iridescenceMaterial = new IridescentMaterial(irradiance, radiance, iridescenceLookUp);

    let cube_obj = null;
    let cube_children = [];

    mtl_loader.load(
      cube_frag_skin,
      (materials) => {
        materials.preload();
        obj_loader.setMaterials(materials);

        obj_loader.load(
          cube_frag,
          // called when resource is loaded
          (object) => {
            console.log(object);
            scene.add(object);

            // Set the cube object so it can be used in the render
            cube_obj = object;

            // TODO: Random colors for now, for debugging
            let colors = [
              0xf8d8f8,
              0x7e87bb,
              0xe1d33c,
              0xb2aebc,
              0x691f1c,
              0x9578c2,
              0xf7a290,
              0xdbb266,
              0x2f85b2,
              0x19a00d,
              0x8d33b3,
              0xffffff,
              0x946c29,
              0x3f2004,
              0x93747a,
              0x954ff3
            ];

            /** @brief Paths for exploding cube elements */
            let animations = [
              { x: -100, y: 0, z: 0 },
              { x: 0, y: 0, z: 0 },
              { x: 0, y: 100, z: 0 },
              { x: 0, y: 0, z: -200 },
              { x: 100, y: 0, z: 0 },
              { x: 0, y: 0, z: -200 },
              { x: 0, y: -100, z: 0 },
              { x: 0, y: 0, z: 200 },
              { x: -200, y: 0, z: 0 },
              { x: 0, y: 0, z: 200 },
              { x: 0, y: 0, z: -100 },
              { x: 0, y: -200, z: 0},
              { x: 0, y: 200, z: 0},
              { x: 0, y: 0, z: 200},
              { x: 200, y: 0, z: 0},
              { x: 0, y: -100, z: 0}
            ]

            // Set colors for components and add animation
            for (let i = 0; i < object.children.length; i++) {
              let child = object.children[i];

              const material = new THREE.MeshPhongMaterial({
                color: colors[i],
                flatShading: true,
              });

              // Set material
              child.material = material;

              // Tween animation
              let position_current = { x: 0, y: 0, z: 0 };
              let position_bottom = { x: 0, y: 0, z: 0 };
              let position_top = animations[i];
              let tween_forward = new TWEEN.Tween(position_current).to(position_top, CONSTANTS.ANIMATION_DURATION);
              let tween_backward = new TWEEN.Tween(position_current).to(position_bottom, CONSTANTS.ANIMATION_DURATION);
              tween_forward.easing(TWEEN.Easing.Cubic.InOut);
              tween_backward.easing(TWEEN.Easing.Cubic.InOut);

              cube_children.push({
                obj: child,
                animation_forward: tween_forward,
                animation_backward: tween_backward,
                position: position_current
              });

              tween_forward.onUpdate(() => {
                child.position.x = position_current.x;
                child.position.y = position_current.y;
                child.position.z = position_current.z;
              })

              tween_backward.onUpdate(() => {
                child.position.x = position_current.x;
                child.position.y = position_current.y;
                child.position.z = position_current.z;
              })
            }

            // chain animations in a loop
            for (let j = 0; j < cube_children.length; j++) {
              cube_children[j].animation_forward.chain(cube_children[j].animation_backward);
              cube_children[j].animation_backward.chain(cube_children[j].animation_forward);
            }

            // Start animation
            for (let i = 0; i < cube_children.length; i++) {
              cube_children[i].animation_forward.start();
            }
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

      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();

      controls.update();

      renderer.render(scene, camera);

      requestAnimationFrame(render_cube);

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

  handleOrientation(event) {
    /*
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    */
  }

  render () {
    return <div className='landing-page-background' onMouseMove={this._onMouseMove.bind(this)}>
      <canvas id='landing-page-cube' />
    </div>;
  }
}

export default LandingPageModel;