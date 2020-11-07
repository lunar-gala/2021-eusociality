/**
 * Landing page 3D asset.
 */

import React from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cube_frag from '../../assets/models/cube_frag/cube_frag.obj';
import cube_frag_skin from '../../assets/models/cube_frag/cube_frag.mtl';
// import cube_frag from '../../assets/models/fractured_cube/fracturedCube.obj';
// import cube_frag_skin from '../../assets/models/fractured_cube/fracturedCube.mtl';

class LandingPageModel extends React.Component {
  componentDidMount() {
    const canvas = document.querySelector('#landing-page-cube');
    const renderer = new THREE.WebGLRenderer({ canvas });

    /* Set up camera */
    const fov = 75;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 50000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.x = 300;
    camera.position.y = 300;
    camera.position.z = 300;

    const scene = new THREE.Scene();

    const controls = new OrbitControls(camera, renderer.domElement);

    // Add a light
    const color = 0xFFFFFF;
    const light_amb = new THREE.AmbientLight(color, 0.5);
    const light_dir = new THREE.DirectionalLight(color, 0.75);
    const light_dir_2 = new THREE.DirectionalLight(color, 0.75);
    const light_dir_3 = new THREE.DirectionalLight(color, 0.75);
    const light_dir_4 = new THREE.DirectionalLight(color, 0.75);
    light_dir.position.set(-300, 300, 300);
    light_dir_2.position.set(300, 300, 300);
    light_dir_3.position.set(0, 1000, 0);
    light_dir_4.position.set(-300, 300, -300);
    scene.add(light_amb);
    scene.add(light_dir);
    scene.add(light_dir_2);
    scene.add(light_dir_3);
    scene.add(light_dir_4);

    /* Add object */
    const obj_loader = new OBJLoader();
    const mtl_loader = new MTLLoader();

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
    function render_cube () {
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
    }

    requestAnimationFrame(render_cube);
  }

  render () {
    return <div className='landing-page-background'>
      <canvas id='landing-page-cube' />
    </div>;
  }
}

export default LandingPageModel;