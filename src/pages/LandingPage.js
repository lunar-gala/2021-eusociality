import React from 'react';
import { Link } from "react-router-dom";
import * as CONSTANTS from '../constants';
import * as LINE_DATA from '../data/line_data';
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
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
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
      /** @brief If we are detecting mobile styles or not */
      isMobile: window.innerWidth < CONSTANTS.DESKTOP_WIDTH,
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
      fading: false,
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
      camera_positions: [],
      animation_done: false,
      renderer: null,
      controls: null,
      clock: null,
      scene: null,
      object: null,
      mixer: null
    };

    this.handlerSelectedLineIdx = this.handlerSelectedLineIdx.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.render_cube = this.render_cube.bind(this);

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
          this.state.current_touch[0].y < 90
        )) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT
          });
        }
      } else {
        // Tapping the top of the default landing page opens the nav menu
        if (gesture === 'Tap' && this.state.current_touch[0].y < 90) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN
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

    // TODO: add more camera angles, also this is just for demo. These are not
    // the accurate camera angles. Also todo is to correspond the correct line
    // number to the correct camera.
    if (index % 2 === 0) {
      new TWEEN.Tween(this.state.camera.position).to({
        x: this.state.camera_positions[0].position.x,
        y: this.state.camera_positions[0].position.y,
        z: this.state.camera_positions[0].position.z
      }, 2000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .start();
    } else {
      new TWEEN.Tween(this.state.camera.position).to({
        x: this.state.camera_positions[1].position.x,
        y: this.state.camera_positions[1].position.y,
        z: this.state.camera_positions[1].position.z
      }, 2000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .start();
    }

    this.setState({fading: true}); // fade out
    this.timer = setTimeout(_ => {
      this.setState({selectedLineIdx: index});
      this.setState({fading: false}); // fade back in
  }, 200); // animation timing offset
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
    return;

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

    this.setState({
      renderer: renderer
    });

    /* Set up camera */
    const fov = 75;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 1000;
    let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.set(
      CAMERA_POSITION.x,
      CAMERA_POSITION.y,
      this.state.isMobile ? 500 : CAMERA_POSITION.z
    );

    this.setState({camera : camera});

    const scene = new THREE.Scene();

    this.setState({
      controls: new OrbitControls(camera, renderer.domElement),
      clock: new THREE.Clock(),
      scene: scene
    });

    // Add a light and background
    scene.background = new THREE.Color( CONSTANTS.LANDING_PAGE_BACKGROUND_COLOR );
    const light_color = 0xFFFFFF;
    const light_intensity = 1;
    const light_amb = new THREE.AmbientLight(light_color, light_intensity);
    scene.add(light_amb);

    /* Add object */
    const gltf_loader = new GLTFLoader();

    /**
     * HDR, or "world view" of the object. Think of this as the world in a cube
     * as seen from the object. This is 6 sides in the X, Y, Z directions.
     */
    let radiance = this.loadCubeMap('radiance');
    let irradiance = this.loadCubeMap('irradiance');

    // Texture for the main cube
    let iridescence_texture_main = new ThinFilmFresnelMap(
      CONSTANTS.IRIDESCENCE_SETTINGS_MAIN.THICKNESS,
      CONSTANTS.IRIDESCENCE_SETTINGS_MAIN.REFRACTIVE_INDEX_FILM,
      CONSTANTS.IRIDESCENCE_SETTINGS_MAIN.REFRACTIVE_INDEX_BASE,
      CONSTANTS.IRIDESCENCE_SETTINGS_MAIN.SIZE
    );
    let iridescence_material_main = new IridescentMaterial(
      irradiance,
      radiance,
      CONSTANTS.IRIDESCENCE_SETTINGS_MAIN.BOOST,
      iridescence_texture_main,
      CONSTANTS.IRIDESCENCE_SETTINGS_MAIN.BASE_TEXTURE_RATIO,
      CONSTANTS.IRIDESCENCE_SETTINGS_MAIN.IRIDESCENT_TEXTURE_RATIO,
      CONSTANTS.IRIDESCENCE_SETTINGS_MAIN.BRIGHTNESS,
      CONSTANTS.IRIDESCENCE_SETTINGS_MAIN.TEXTURE_ZOOM
    );

    /**
     * Texture for the outline on the cube. It's technically just a bright,
     * glowing white, but boost on iridescence does that well so I'm just going
     * to use that. I achieved a glow by using a high boost value.
     */
    let iridescence_texture_outline = new ThinFilmFresnelMap(
      CONSTANTS.IRIDESCENCE_SETTINGS_OUTLINE.THICKNESS,
      CONSTANTS.IRIDESCENCE_SETTINGS_OUTLINE.REFRACTIVE_INDEX_FILM,
      CONSTANTS.IRIDESCENCE_SETTINGS_OUTLINE.REFRACTIVE_INDEX_BASE,
      CONSTANTS.IRIDESCENCE_SETTINGS_OUTLINE.SIZE
    );

    let iridescence_material_outline = new IridescentMaterial(
      irradiance,
      radiance,
      CONSTANTS.IRIDESCENCE_SETTINGS_OUTLINE.BOOST,
      iridescence_texture_outline
    );

    /**
     * Add controls so we can tweak the asset
     */
    const gui = new GUI();
    gui.remember(iridescence_texture_main);
    gui.remember(iridescence_material_main);
    gui.add(iridescence_texture_main, 'filmThickness').min(100).max(1000);
    gui.add(iridescence_texture_main, 'refractiveIndexFilm').min(1).max(5);
    gui.add(iridescence_texture_main, 'refractiveIndexBase').min(1).max(5);
    gui.add(iridescence_material_main, 'boost').min(1).max(50);
    gui.add(iridescence_material_main, 'iridescenceRatio').min(0).max(10);
    gui.add(iridescence_material_main, 'baseTextureRatio').min(0).max(10);
    gui.add(iridescence_material_main, 'brightness').min(0).max(10);
    gui.add(iridescence_material_main, 'textureZoom').min(0).max(2);
    gui.close();

    gltf_loader.load(
      cube_frag,
      // called when resource is loaded
      (object) => {
        this.setState({
          object: object.scene
        });

        let object_children = object.scene.children[0].children;

        for (let i = 0; i < object_children.length; i++) {
          // Set iridescence texture for the main object
          object_children[i].children[1].material = iridescence_material_main;

          // Set iridescence texture for the outline on the main object
          let atom_array = object_children[i].children[0].children;

          for (let j = 0; j < atom_array.length; j++) {
            atom_array[j].material = iridescence_material_outline;
          }
        }

        console.log(object);


        scene.add(object.scene);

        // Starting position of the 3d asset. We want to offset it to the right.
        object.scene.position.set(
          this.state.isMobile ? 0 : OBJECT_POSITION.x,
          OBJECT_POSITION.y,
          OBJECT_POSITION.z
        );

        // Should set the pieces of the object to be in the initial stages of the animation

        // TODO: set to the scene camera
        this.setState({
          camera_positions: object.cameras
        });

        let mixer = new THREE.AnimationMixer( object.scene );
        this.setState({
          mixer: mixer
        });
        let action = mixer.clipAction( object.animations[0] );
        action.setLoop(THREE.LoopOnce);
        action.play();

        mixer.addEventListener('finished', () => {
          this.setState({
            animation_done: true
          });
        });
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

    requestAnimationFrame(this.render_cube);
  }

  // Resize if needed
  resizeRendererToDisplaySize(renderer) {
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
  render_cube (time) {
    let camera = this.state.camera;
    let renderer = this.state.renderer;
    let mixer = this.state.mixer;
    let cube_obj = this.state.object;

    if (this.resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    this.state.controls.update();

    renderer.render(this.state.scene, camera);

    var delta = this.state.clock.getDelta();

    if ( mixer ) mixer.update( 3*delta );

    TWEEN.update(time);

    if (cube_obj && !this.state.animation_done) {
      cube_obj.rotation.y = time/10000;
    }

    requestAnimationFrame(this.render_cube);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('deviceorientation', this.handleOrientation);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < CONSTANTS.DESKTOP_WIDTH
    });
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
    const{fading} = this.state;
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
          </div>
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
          <div id="main-screen" className='desktop'>
            <div className={`${fading ? 'faded' : 'notFaded'}`} id='curr-line'>
              <div id='line-name'>
                {
                  (this.state.selectedLineIdx >= 0) ?
                    `${LINE_DATA.LINE_INFO[this.state.selectedLineIdx].name}` :
                    'COLLECTIVA'
                }
              </div>
              <div id='below-line-name'>
                <div id='designers-name'>
                  {
                    (this.state.selectedLineIdx >= 0) ?
                      `${UTIL.name_list_formatter(LINE_DATA.LINE_INFO[this.state.selectedLineIdx].designers)}` :
                      ''
                  }
                </div>
                <div id='see-more-wrapper' className={(this.state.selectedLineIdx >= 0 ? 'show' : '') + ' desktop'}>
                  <Link id="more-info" to={{
                    pathname: `/lines/${this.state.selectedLineIdx+1}`,
                    state: { currLineIdx: this.state.selectedLineIdx }
                  }}>
                    <span id='more-info-text'>
                      See More
                    </span>
                    <div id='more-info-arrow'>
                      <div id='arrow'/>
                    </div>
                  </Link>
                  <div id='see-more-line-wrapper'>
                    <div id="see-more-dot" />
                    <div id="see-more-line" />
                  </div>
                </div >
              </div>
            </div>

            { /* Various line and dot elements */ }
            <div className="vertical-line" id="outer-lines" />
            <div className="vertical-line" id="inner-lines" />

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