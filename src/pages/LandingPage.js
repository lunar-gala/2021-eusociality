import React from 'react';
import * as CONSTANTS from '../constants';
import * as UTIL from '../util';
import Navbar from '../components/Navbar';
import TitleTheme from '../components/TitleTheme';
import Logo from '../components/Logo';
import MobileOpenMenu from '../components/MobileOpenMenu';
import MobileMenuLineList from '../components/MobileMenuLineList';
import MobileMenuNavList from '../components/MobileMenuNavList';
import * as GESTURE from '../lib/Gesture';
import DesktopSideNav from '../components/DesktopSideNav';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cube_frag from '../../assets/models/cube_frag/reducedpoly_partial.gltf'

import * as TWEEN from '@tweenjs/tween.js';

import ThinFilmFresnelMap from '../lib/ThinFilmFresnelMap';
import IridescentMaterial from '../lib/IridescentMaterial';

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

/**
 * Navbar for selecting lines
 */
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Which line is currently being hovered
      // Defaults to -1 when nothing is selected
      selectedLineIdx: -1,
      /** @brief First touch recorded by `touchStart` handler */
      first_touch: [],
      /** @brief Current touch recorded by `touchMove` handler */
      current_touch: [],
      /**
       * We have an FSM-like organization for states. We do a Moore-type
       * machine, where we perform actions and change states based on which
       * state we are in.
       */
      landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
      /**
       * @brief Keeps track of how far we have scrolled in the mobile line menu.
       * We use this to figure out if we should close the mobile menu or not.
       * If we swipe down and we aren't at the top of the list yet, then we
       * don't close the bottom sheet yet.
       */
      mobile_line_menu_y_offset: 0,
      /** @brief Mouse position x */
      x: 0,
      /** @brief Mouse position y */
      y: 0,
      /** @brief Window width, including resizing */
      width: 0,
      /** @brief Window height, including resizing */
      height: 0,
      /** @brief 3D camera */
      camera: null
    };

    this.handlerSelectedLineIdx = this.handlerSelectedLineIdx.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);

    // Keep track of window width
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  touchStart (event) {
    let touches = GESTURE.getTouchesList(event);

    this.setState({
      first_touch: GESTURE.getFingerPosition(touches, touches.length),
      current_touch: GESTURE.getFingerPosition(touches, touches.length)
    })
  }

  touchMove (event) {
    let touches = GESTURE.getTouchesList(event);

    this.setState({
      current_touch: GESTURE.getFingerPosition(touches, touches.length)
    });
  }

  touchEnd () {
    let gesture = GESTURE.getGesture(
      this.state.first_touch[0].x,
      this.state.current_touch[0].x,
      this.state.first_touch[0].y,
      this.state.current_touch[0].y);

    if (gesture === 'Tap') {
      console.log('[DEBUG] Tap', this.state.current_touch[0].y);
    } else if (
      this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN &&
      (gesture === 'Up')) {
      this.setState({
        mobile_line_menu_y_offset: this.state.mobile_line_menu_y_offset +
          this.state.first_touch[0].y - this.state.current_touch[0].y
      });
    }

    /**
     * To prevent extra scrolling from touch, we are adding a timeout here to
     * wait for the touch event to end. This is _very_ hacky and I'm not sure
     * if this is a good idea at all...seems to work though and 25ms to be good
     * enough to not be too noticeable for humans.
     *
     * TODO: I haven't figured out a good way to detect if the user touches
     * "outside" of the nav and line menus. I'm hard coding rn, but I don't
     * think this is good bc of different platforms and such
     */
    setTimeout(() => {
      if (this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN) {
        // Has to be a swipe down *and* the mobile line menu has to be at the top
        if (gesture === 'Down' && this.state.mobile_line_menu_y_offset < 10) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
            mobile_line_menu_y_offset: 0
          });
        }
        else if (gesture === 'Tap' && this.state.current_touch[0].y <= 256) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
            mobile_line_menu_y_offset: 0
          });
        }
      } else if (this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN) {
        if (gesture === 'Tap' && (
          this.state.current_touch[0].y >= 256 ||
          this.state.current_touch[0].y <= 256
        )) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT
          });
        }
      } else {
        // Swiping up on the default landing page opens the line menu
        if (gesture === 'Up') {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN
          });
        }
        // Tapping the top of the default landing page opens the nav menu
        else if (gesture === 'Tap' && this.state.current_touch[0].y < 90) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN
          });
        }
        // Tapping the lower part of the default landing page opens the line menu
        else if (gesture === 'Tap' && this.state.current_touch[0].y >= 90) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN
          });
        }
      }

      // Happens after the delayed handle
      console.log('[DEBUG] State:', this.state.landing_page_state);
      if (
        this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN &&
        (gesture === 'Down')) {
        this.setState({
          mobile_line_menu_y_offset: this.state.mobile_line_menu_y_offset +
            this.state.first_touch[0].y - this.state.current_touch[0].y
        });
      }
    }, 25);
  }

  handlerSelectedLineIdx (index) {
    this.setState({
      selectedLineIdx: index,
    });
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

  render() {
    return (
        <div className={`landing-page${
          (this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN) ?
          ' mobile-line-menu-open' : ''
        }`}
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
          onScroll={e => e.preventDefault()}
        >
          { /* Common Elements */ }
          <div
            className={`landing-page-background ${this.state.landing_page_state}`}
            onMouseMove={this._onMouseMove.bind(this)}>
            <canvas id='landing-page-cube' />
          </div>;
          <TitleTheme
            landing_page_state={this.state.landing_page_state}
          />
          <Logo
            landing_page_state={this.state.landing_page_state}
          />
          { /* Mobile Elements */ }
          <MobileOpenMenu
            landing_page_state={this.state.landing_page_state}
          />
          <MobileMenuLineList
            landing_page_state={this.state.landing_page_state}
          />
          <MobileMenuNavList
            landing_page_state={this.state.landing_page_state}
          />
          { /* Desktop Elements */ }

          <DesktopSideNav />
          <div id="main-screen">
            <div id='curr-line'>
              <div id='line-name'>
                {
                  (this.state.selectedLineIdx >= 0) ?
                    `${CONSTANTS.LINE_INFO[this.state.selectedLineIdx].name}` :
                    'COLLECTIVA'
                }
              </div>
              <div id='designers-name'>
                {
                  (this.state.selectedLineIdx >= 0) ?
                    `${UTIL.name_list_formatter(CONSTANTS.LINE_INFO[this.state.selectedLineIdx].designers)}` :
                    ''
                }
              </div>
            </div>
            <div id="more-info">
              See more &gt;
            </div>

            <div id="see-more-line" />
            <div className="dot" id="see-more-dot" />

            <div className="vertical-line" id="outer-lines" />
            <div className="vertical-line" id="inner-lines" />
            <div className="horizontal-line lower" />
            <div className="horizontal-line upper" />
            <div className="dot left-dot lower"/>
            <div className="dot left-dot upper" />
            <div className="dot right-dot lower"/>
            <div className="dot right-dot upper" />

          </div>

          <Navbar
            handlerSelectedLineIdx={this.handlerSelectedLineIdx}
            selectedLineIdx={this.state.selectedLineIdx}
          />
        </div>
    );
  }
}

export default LandingPage;