import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as CONSTANTS from "../constants";
import * as LINE_DATA from "../data/line_data";
import * as UTIL from "../util";
import * as GESTURE from "../lib/Gesture";

// Common Elements
import TitleTheme from "../components/TitleTheme";
import Logo from "../components/Logo";

// Desktop Elements
import Navbar from "../components/Navbar";
import AboutPageDesktop from "../pages/AboutPageDesktop";
import WatchPageDesktop from "../pages/WatchPageDesktop";
import PeoplePage from "../pages/PeoplePage";
import DesktopSideNav from "../components/DesktopSideNav";
import LandingPagePrompt from "../components/LandingPagePrompt";

// Mobile Elements
import MobileOpenMenu from "../components/MobileOpenMenu";
import MobileMenuLineList from "../components/MobileMenuLineList";
import MobileMenuNavList from "../components/MobileMenuNavList";
import AboutPageMobile from "./AboutPageMobile";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import cube_frag from "../../assets/models/cube_frag/reducedpoly_final.gltf";

import * as TWEEN from "@tweenjs/tween.js";

import ThinFilmFresnelMap from "../lib/ThinFilmFresnelMap";
import IridescentMaterial from "../lib/IridescentMaterial";

/**
 * Import HDR map
 *
 * This defines a 6-faced cube that is the "world" around the object. This is
 * used in iridescence texture to calculate light diffusion.
 */
import irradiance_negX from "../../assets/models/skybox/irradiance/negX.jpg";
import irradiance_negY from "../../assets/models/skybox/irradiance/negY.jpg";
import irradiance_negZ from "../../assets/models/skybox/irradiance/negZ.jpg";
import irradiance_posX from "../../assets/models/skybox/irradiance/posX.jpg";
import irradiance_posY from "../../assets/models/skybox/irradiance/posY.jpg";
import irradiance_posZ from "../../assets/models/skybox/irradiance/posZ.jpg";
import radiance_negX from "../../assets/models/skybox/radiance/negX.jpg";
import radiance_negY from "../../assets/models/skybox/radiance/negY.jpg";
import radiance_negZ from "../../assets/models/skybox/radiance/negZ.jpg";
import radiance_posX from "../../assets/models/skybox/radiance/posX.jpg";
import radiance_posY from "../../assets/models/skybox/radiance/posY.jpg";
import radiance_posZ from "../../assets/models/skybox/radiance/posZ.jpg";

/*** CAMERA PARAMETERS ***/
/** @brief Absolute coordinates of the default camera position */
const CAMERA_POSITION = {
  x: 0,
  y: 30,
  z: 400,
};

const CAMERA_POSITION_MOBILE = {
  x: 0,
  y: 0,
  z: 500,
};

/** @brief Starting position of the object */
const OBJECT_POSITION = {
  x: 200,
  y: 0,
  z: 0,
};

/** @brief How much the camera tilts on mobile device tilt */
const CAMERA_PAN_FACTOR_MOBILE = {
  x: 0.5,
  y: 0.5,
  z: 0.5,
};

/** @brief How much the camera tilts on mouse move */
const CAMERA_PAN_FACTOR_DESKTOP = {
  x: 50,
  y: 50,
  z: 20,
};

/** @brief how much people tilt their phones when they hold it on average, in degrees. */
const RESTING_PHONE_ANGLE = 36;

const regexFindPathName = /\/(\w+).*/;

/**
 * Navbar for selecting lines
 */
class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    // Update the state of the site based on the URL
    let landing_page_state = CONSTANTS.LANDING_PAGE_STATES.DEFAULT;
    let selectedLineIdx = -1;

    const currPathMatches = regexFindPathName.exec(
      this.props.location.pathname
    );
    const isMobile = window.innerWidth < CONSTANTS.DESKTOP_WIDTH;

    console.log("matches", currPathMatches, isMobile);

    if (currPathMatches !== null) {
      const currPathName = currPathMatches[1];

      if (isNaN(currPathName)) {
        landing_page_state =
          CONSTANTS.PATH_TO_STATE[isMobile ? "mobile" : "desktop"][
            currPathName
          ];
      }
      // This matches a line number
      else {
        landing_page_state =
          CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LINE_PAGE_LOAD;
        selectedLineIdx = parseInt(currPathName) - 1;
      }
    } else {
      landing_page_state =
        CONSTANTS.PATH_TO_STATE[isMobile ? "mobile" : "desktop"]["start"];
    }

    this.state = {
      /** @brief If the 3D asset has loaded. */
      assetHasLoaded: false,
      /** @brief If we are detecting mobile styles or not. */
      isMobile: isMobile,
      /**
       * Which line is selected. Defaults to -1 when nothing is selected.
       * Used on the desktop landing page.
       */
      selectedLineIdx: selectedLineIdx,
      /** @brief First touch recorded by `touchStart` handler */
      first_touch: [],
      /** @brief Current touch recorded by `touchMove` handler */
      current_touch: [],
      /**
       * We have an FSM-like organization for states. We do a Moore-type
       * machine, where we perform actions and change states based on which
       * state we are in.
       */
      landing_page_state: landing_page_state,
      /**
       * @brief Keeps track of how far we have scrolled in the mobile line menu.
       * We use this to figure out if we should close the mobile menu or not.
       * If we swipe down and we aren't at the top of the list yet, then we
       * don't close the bottom sheet yet.
       */
      mobile_line_menu_y_offset: 0,
      /**
       * @brief This state indicates if a line index is changing. We use it for
       * fade-out, but we can also use it for other animations.
       *
       * The way we use this state is that if we click on a line, we briefly
       * set this to true, so when we set it back to false, we get an animation
       * triggered for each line change.
       */
      fading: true,
      /**
       * @brief Keeps track of the interval that updates the countdown timer.
       *
       * We need to keep track of this because we need to cancel it if we are
       * no longer on the watch page and don't want to update the countdown.
       */
      countdownInterval: null,
      /**
       * @brief The current countdown timer state.
       */
      countdownState: UTIL.calculate_date_difference(CONSTANTS.SHOW_DATE),
      landing_page_animations_navbar: "",
      landing_page_animations_sidebar: "",
      landing_page_animations_header: "",
      landing_page_animations_logo: "",
      landing_page_animations_middleTitle: "",
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
      /** @brief Current position of the 3D camera */
      curr_camera_position: null,
      /** @brief The positions of the camera for each line */
      camera_positions: [],
      /** @brief Stores the animations to be played from the cube. */
      cube_animations: null,
      /**
       * @brief If the animation for the 3D asset is done yet.
       * TODO: currently not used
       */
      animation_done: false,
      renderer: null,
      controls: null,
      clock: null,
      scene: null,
      object: null,
      mixer: null,
      /** @brief Indicates if the cube has already been expanded. */
      cube_has_expanded: false,
      /** @brief Positions of the objects in the cube. */
      cube_positions: [],
    };

    this.handleOrientation = this.handleOrientation.bind(this);
    this.handlerSetLandingPageState = this.handlerSetLandingPageState.bind(
      this
    );
    this.handlerSelectedLineIdx = this.handlerSelectedLineIdx.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this.pageShow = this.pageShow.bind(this);
    this.playCubeAnimation = this.playCubeAnimation.bind(this);
    this.playCubeExpand = this.playCubeExpand.bind(this);
    this.render_cube = this.render_cube.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.updateCountdown = this.updateCountdown.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  startupAnimationSequenceMobile() {
    this.handlerSetLandingPageState(CONSTANTS.LANDING_PAGE_STATES.DEFAULT);

    let temp = function check_cube_progress() {
      if (this.state.assetHasLoaded) {
        clearInterval(interval);

        // Expand the cube
        let object_children = this.state.object.children[0].children;

        for (let i = 0; i < this.state.cube_positions.length; i++) {
          let curr_child = object_children[i];

          new TWEEN.Tween(curr_child.position)
            .to(
              {
                x: this.state.cube_positions[i].end.x,
                y: this.state.cube_positions[i].end.y,
                z: this.state.cube_positions[i].end.z,
              },
              2000
            )
            .easing(TWEEN.Easing.Cubic.InOut)
            .onComplete(() => {
              curr_child.position.set(
                this.state.cube_positions[i].end.x,
                this.state.cube_positions[i].end.y,
                this.state.cube_positions[i].end.z
              );
            })
            .start();
        }
      }
    };

    temp = temp.bind(this);

    let interval = setInterval(temp, 10);
  }

  startupAnimationSequence(start_state) {
    if (
      start_state === CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LANDING_PAGE_LOAD
    ) {
      // Make the navbar expand from the middle and the sidebars slide in from the
      // top
      this.setState({
        landing_page_animations_navbar: "start-animation",
        landing_page_animations_sidebar: "start-animation",
      });

      setTimeout(() => {
        // Make the center title show up
        this.setState({
          landing_page_animations_middleTitle: "start-animation",
        });
      }, 1000);
    } else if (
      start_state === CONSTANTS.LANDING_PAGE_STATES.DESKTOP_ABOUT_PAGE_LOAD
    ) {
      this.setState({
        landing_page_animations_header: "start-animation",
      });
      setTimeout(() => {
        this.setState({
          landing_page_animations_sidebar: "start-animation",
        });
        this.handlerSetLandingPageState(
          CONSTANTS.LANDING_PAGE_STATES.DESKTOP_ABOUT_PAGE_OPEN
        );
      }, 500);
    } else if (
      start_state === CONSTANTS.LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_LOAD
    ) {
      this.setState({
        landing_page_animations_header: "start-animation",
      });
      setTimeout(() => {
        this.setState({
          landing_page_animations_sidebar: "start-animation",
        });
        this.handlerSetLandingPageState(
          CONSTANTS.LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_OPEN
        );
      }, 500);
    } else if (
      start_state === CONSTANTS.LANDING_PAGE_STATES.DESKTOP_PEOPLE_PAGE_LOAD
    ) {
      this.setState({
        landing_page_animations_header: "start-animation",
        landing_page_animations_sidebar: "start-animation",
      });
      setTimeout(() => {
        this.handlerSetLandingPageState(
          CONSTANTS.LANDING_PAGE_STATES.DESKTOP_PEOPLE_PAGE_OPEN
        );
      }, 1000);
    } else if (
      start_state === CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LINE_PAGE_LOAD
    ) {
      this.setState({
        landing_page_animations_header: "start-animation",
        landing_page_animations_sidebar: "start-animation",
      });
      setTimeout(() => {
        this.handlerSetLandingPageState(
          CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LINE_PAGE_OPEN
        );
        this.handlerSelectedLineIdx(this.state.selectedLineIdx);
      }, 1000);
    }
  }

  enterSiteAnimationSequence() {
    this.setState({
      landing_page_animations_middleTitle: "close-animation",
    });

    // Bring up the default landing page state
    setTimeout(() => {
      this.setState({
        landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
      });
    }, 500);
  }

  touchStart(event) {
    let touches = GESTURE.getTouchesList(event);

    this.setState({
      first_touch: GESTURE.getFingerPosition(touches, touches.length),
      current_touch: GESTURE.getFingerPosition(touches, touches.length),
    });
  }

  touchMove(event) {
    let touches = GESTURE.getTouchesList(event);

    this.setState({
      current_touch: GESTURE.getFingerPosition(touches, touches.length),
    });
  }

  touchEnd() {
    let gesture = GESTURE.getGesture(
      this.state.first_touch[0].x,
      this.state.current_touch[0].x,
      this.state.first_touch[0].y,
      this.state.current_touch[0].y
    );

    if (gesture === "Tap") {
      console.log("[DEBUG] Tap", this.state.current_touch[0].y);
    } else if (
      this.state.landing_page_state ===
        CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN &&
      gesture === "Up"
    ) {
      this.setState({
        mobile_line_menu_y_offset:
          this.state.mobile_line_menu_y_offset +
          this.state.first_touch[0].y -
          this.state.current_touch[0].y,
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
      if (
        this.state.landing_page_state ===
        CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN
      ) {
        if (gesture === "Tap" && this.state.current_touch[0].y < 90) {
          this.handlerSetLandingPageState(
            CONSTANTS.LANDING_PAGE_STATES.DEFAULT
          );
        }
      } else {
        // Tapping the top of the default landing page opens the nav menu
        if (gesture === "Tap" && this.state.current_touch[0].y < 90) {
          this.handlerSetLandingPageState(
            CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN
          );
        }
      }

      // Happens after the delayed handle
      console.log("[DEBUG] State:", this.state.landing_page_state);
      if (
        this.state.landing_page_state ===
          CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN &&
        gesture === "Down"
      ) {
        this.setState({
          mobile_line_menu_y_offset:
            this.state.mobile_line_menu_y_offset +
            this.state.first_touch[0].y -
            this.state.current_touch[0].y,
        });
      }
    }, 25);
  }

  playCubeAnimation() {
    let temp = function check_cube_progress() {
      if (this.state.assetHasLoaded) {
        clearInterval(interval);

        this.state.cube_animations.expand.play();
        this.state.cube_animations.rotation.start();
      }
    };

    temp = temp.bind(this);

    let interval = setInterval(temp, 10);
  }

  /**
   * Sometimes the asset has not loaded when we want to expand the cube, so we
   * create a loading function here to wait for the cube to load before
   * expanding.
   */
  playCubeExpand() {
    let temp = function check_cube_progress() {
      console.log('checking cube progress', this.state.assetHasLoaded)
      if (this.state.assetHasLoaded) {
        clearInterval(interval);
        let object_children = this.state.object.children[0].children;

        for (let i = 0; i < this.state.cube_positions.length; i++) {
          let curr_child = object_children[i];

          new TWEEN.Tween(curr_child.position)
            .to(
              {
                x: this.state.cube_positions[i].end.x,
                y: this.state.cube_positions[i].end.y,
                z: this.state.cube_positions[i].end.z,
              },
              2000
            )
            .easing(TWEEN.Easing.Cubic.InOut)
            .onComplete(() => {
              curr_child.position.set(
                this.state.cube_positions[i].end.x,
                this.state.cube_positions[i].end.y,
                this.state.cube_positions[i].end.z
              );
            })
            .start();
        }
      }
    };

    temp = temp.bind(this);

    let interval = setInterval(temp, 10);
  }

  /**
   * Sets the state of the landing page and syncs the URL with the state being
   * set.
   *
   * @param {state} state See constants.js for all states
   */
  handlerSetLandingPageState(state) {
    if (state === this.state.landing_page_state) {
      return;
    }

    console.log(
      `[DEBUG] Old State ${this.state.landing_page_state}, New State ${state}`
    );

    this.setState({
      landing_page_state: state,
    });

    // If we are entering the site, we need to end all animations
    if (
      state === CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LANDING_PAGE_CUBE_INTRO
    ) {
      this.playCubeAnimation();
    } else if (state === CONSTANTS.LANDING_PAGE_STATES.DEFAULT) {
      this.setState({
        landing_page_animations_navbar: "",
      });

      // Fix url paths
      if (this.state.selectedLineIdx >= 0) {
        this.props.history.replace("/");
      } else {
        this.props.history.push("/");
      }

      // Reset lines info
      this.handlerSelectedLineIdx(-1);
    }

    // If we scroll in the lines menu, the scroll will persist so we reset it
    if (state !== CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN) {
      document.getElementById("landing-page").scrollTo({
        top: 0,
      });
    }

    // We need to start the countdown timer if we enter the watch page
    if (state === CONSTANTS.LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_OPEN) {
      this.setState({
        countdownInterval: setInterval(this.updateCountdown, 1000),
        countdownState: UTIL.calculate_date_difference(CONSTANTS.SHOW_DATE),
      });
    } else if (this.state.countdownInterval) {
      clearInterval(this.state.countdownInterval);
    }

    const { history } = this.props;

    if (
      CONSTANTS.STATE_TO_PATH[state] &&
      this.props.location.pathname !== CONSTANTS.STATE_TO_PATH[state]
    ) {
      console.log(
        `[DEBUG] state ${state} pushed to history, previous ${this.props.location.pathname}`
      );
      history.push(CONSTANTS.STATE_TO_PATH[state]);
    } else {
      console.log(`[DEBUG] state ${state} has no constant`);
    }
  }

  handlerSelectedLineIdx(index) {
    // This means we need to go to default landing page state
    if (index < 0) {
      this.setState({
        fading: true,
        selectedLineIdx: index,
      });

      return;
    }

    // Expand the cube
    if (!this.state.cube_has_expanded) {
      this.setState({
        cube_has_expanded: true,
      });
      this.playCubeExpand();
    }

    let camera_index = index;
    new TWEEN.Tween(this.state.camera.position)
      .to(
        {
          x: this.state.camera_positions[camera_index].position.x,
          y: this.state.camera_positions[camera_index].position.y,
          z: this.state.camera_positions[camera_index].position.z,
        },
        2000
      )
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.setState({
          curr_camera_position: {
            x: this.state.camera.position.x,
            y: this.state.camera.position.y,
            z: this.state.camera.position.z,
          },
        });
      })
      .onComplete(() => {
        this.setState({
          curr_camera_position: {
            x: this.state.camera_positions[camera_index].position.x,
            y: this.state.camera_positions[camera_index].position.y,
            z: this.state.camera_positions[camera_index].position.z,
          },
        });
      })
      .start();

    /**
     * Put the line number in the url. We want this because
     *
     * 1. If a user navigates to /6, then the 6th line should show up, without
     *    all the transition stuff
     * 2. If a user navigates to the line page and then goes back, they should
     *    be able to go the line they came from
     */
    if (this.state.selectedLineIdx >= 0) {
      this.props.history.replace(`/${index + 1}`);
    } else {
      this.props.history.push(`/${index + 1}`);
    }

    // fade out
    this.setState({ fading: true });
    this.handlerSetLandingPageState(
      CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LINE_PAGE_OPEN
    );

    this.timer = setTimeout(() => {
      // fade back in
      this.setState({
        selectedLineIdx: index,
        fading: false,
      });
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
    let x = e.screenX;
    let y = e.screenY;
    let width = this.state.width;
    let height = this.state.height;

    // Offset for the camera
    let offset_x = (x - width / 2) / (width / 2);
    let offset_y = -(y - height / 2) / (height / 2);

    this.setState({ x: offset_x, y: offset_y });

    let phi = (90 * offset_x * Math.PI) / 180;
    let theta = (90 * offset_y * Math.PI) / 180;
    let kappa = ((90 + 90 * offset_x) * Math.PI) / 180;

    // TODO: animate this movement so it is smoother
    if (this.state.curr_camera_position) {
      this.state.camera.position.set(
        this.state.curr_camera_position.x +
          Math.sin(phi) * CAMERA_PAN_FACTOR_DESKTOP.x,
        this.state.curr_camera_position.y +
          Math.sin(theta) * CAMERA_PAN_FACTOR_DESKTOP.y,
        this.state.curr_camera_position.z -
          Math.pow(Math.cos(kappa), 2) * CAMERA_PAN_FACTOR_DESKTOP.z
      );
    }
  }

  loadCubeMap(map) {
    let files = [
      radiance_negX,
      radiance_negY,
      radiance_negZ,
      radiance_posX,
      radiance_posY,
      radiance_posZ,
    ];

    if (map === "irradiance") {
      files = [
        irradiance_negX,
        irradiance_negY,
        irradiance_negZ,
        irradiance_posX,
        irradiance_posY,
        irradiance_posZ,
      ];
    }

    var loader = new THREE.CubeTextureLoader();
    return loader.load(files);
  }

  /**
   * @brief Updates the countdown timer on the watch page.
   */
  updateCountdown() {
    this.setState({
      countdownState: UTIL.calculate_date_difference(CONSTANTS.SHOW_DATE),
    });
  }

  startupWrapper() {
    console.log("[DEBUG] Hit startup Wrapper");
    if (this.state.isMobile) {
      this.startupAnimationSequenceMobile();
    } else {
      setTimeout(() => {
        // Trigger the animation for the current page
        this.startupAnimationSequence(this.state.landing_page_state);
      }, 400);
    }
  }

  pageShow() {
    console.log("[DEBUG] pageshow event hit");
    this.props.handlePageLoad();
    this.startupWrapper();
  }

  /**
   * @brief We create the 3D asset here and load it onto the page.
   */
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("deviceorientation", this.handleOrientation, true);
    window.addEventListener("pageshow", this.pageShow);

    // If we already have loaded, just trigger the startup sequence
    if (this.props.page_has_loaded) {
      this.startupWrapper();
    }

    this.props.history.listen((loc, action) => {
      console.log(loc, action);
      if (action === "POP") {
        console.log("[DEBUG] Back button pressed, POP: ", loc);
        this.handlerSetLandingPageState(
          CONSTANTS.PATH_TO_STATE["desktop_nav"][
            UTIL.return_first_regex_match(regexFindPathName, loc.pathname)
          ]
        );
      }
    });

    const canvas = document.querySelector("#landing-page-cube");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    this.setState({
      renderer: renderer,
    });

    /* Set up camera */
    const fov = 75;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 2000;
    let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    let camera_position = {
      ...(this.state.isMobile ? CAMERA_POSITION : CAMERA_POSITION_MOBILE),
    };

    camera.position.set(
      camera_position.x,
      camera_position.y,
      camera_position.z
    );

    this.setState({
      camera: camera,
      curr_camera_position: camera_position,
    });

    const scene = new THREE.Scene();

    this.setState({
      controls: new OrbitControls(camera, renderer.domElement),
      clock: new THREE.Clock(),
      scene: scene,
    });

    // Add a light and background
    scene.background = new THREE.Color(CONSTANTS.LANDING_PAGE_BACKGROUND_COLOR);
    const light_color = 0xffffff;
    const light_intensity = 1;
    const light_amb = new THREE.AmbientLight(light_color, light_intensity);
    scene.add(light_amb);

    /* Add object */
    const gltf_loader = new GLTFLoader();

    /**
     * HDR, or "world view" of the object. Think of this as the world in a cube
     * as seen from the object. This is 6 sides in the X, Y, Z directions.
     */
    let radiance = this.loadCubeMap("radiance");
    let irradiance = this.loadCubeMap("irradiance");

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
     *
     * TODO: remove this for the actual
     */
    const gui = new GUI();
    gui.remember(iridescence_texture_main);
    gui.remember(iridescence_material_main);
    gui.add(iridescence_texture_main, "filmThickness").min(100).max(1000);
    gui.add(iridescence_texture_main, "refractiveIndexFilm").min(1).max(5);
    gui.add(iridescence_texture_main, "refractiveIndexBase").min(1).max(5);
    gui.add(iridescence_material_main, "boost").min(1).max(50);
    gui.add(iridescence_material_main, "iridescenceRatio").min(0).max(10);
    gui.add(iridescence_material_main, "baseTextureRatio").min(0).max(10);
    gui.add(iridescence_material_main, "brightness").min(0).max(10);
    gui.add(iridescence_material_main, "textureZoom").min(0).max(2);
    gui.close();

    gltf_loader.load(
      cube_frag,
      // called when resource is loaded
      (object) => {
        this.setState({
          object: object.scene,
        });

        console.log(object);

        let object_children = object.scene.children[0].children;

        for (let i = 0; i < object_children.length; i++) {
          let wireframe_index = 0;
          let asset_index = 1;

          if (object_children[i].name === "Bound") {
            wireframe_index = 1;
            asset_index = 0;

            let temp_object_children =
              object_children[i].children[asset_index].children;

            for (let j = 0; j < temp_object_children.length; j++) {
              temp_object_children[j].material = iridescence_material_main;
            }
          }

          // Set iridescence texture for the main object
          object_children[i].children[
            asset_index
          ].material = iridescence_material_main;

          // Set iridescence texture for the outline on the main object
          let atom_array =
            object_children[i].children[wireframe_index].children;

          for (let j = 0; j < atom_array.length; j++) {
            atom_array[j].material = iridescence_material_outline;
          }
        }

        scene.add(object.scene);

        // Starting position of the 3d asset. We want to offset it to the right.
        object.scene.position.set(
          this.state.isMobile ? 0 : OBJECT_POSITION.x,
          OBJECT_POSITION.y,
          OBJECT_POSITION.z
        );

        // Should set the pieces of the object to be in the initial stages of the animation
        this.setState({
          camera_positions: object.cameras,
        });

        let starting_camera = object.cameras[16];

        camera.position.set(
          starting_camera.position.x,
          starting_camera.position.y,
          starting_camera.position.z
        );

        this.setState({
          curr_camera_position: camera_position,
        });

        let mixer = new THREE.AnimationMixer(object.scene);
        this.setState({
          mixer: mixer,
        });

        let cube_animations = object.animations[0];
        let cube_positions = [];

        for (let i = 0; i < cube_animations.tracks.length; i++) {
          cube_animations.tracks[i].times = [0, 10];
          cube_animations.tracks[i].values = cube_animations.tracks[
            i
          ].values.slice(0, 6);

          object_children[i].position.set(
            cube_animations.tracks[i].values[0],
            cube_animations.tracks[i].values[1],
            cube_animations.tracks[i].values[2]
          );

          // Store the initial and ending positions of the cube objects
          cube_positions.push({
            start: {
              x: cube_animations.tracks[i].values[0],
              y: cube_animations.tracks[i].values[1],
              z: cube_animations.tracks[i].values[2],
            },
            end: {
              x: cube_animations.tracks[i].values[3],
              y: cube_animations.tracks[i].values[4],
              z: cube_animations.tracks[i].values[5],
            },
          });
        }
        this.setState({
          cube_positions: cube_positions,
        });

        cube_animations.duration = 10;

        console.log(object);

        let cube_expand_animation = mixer.clipAction(cube_animations);
        cube_expand_animation.setLoop(THREE.LoopPingPong);
        cube_expand_animation.repetitions = 2;
        cube_expand_animation.timeScale = 5;

        mixer.addEventListener("finished", () => {
          this.setState({
            animation_done: true,
            landing_page_animations_header: "start-animation",
            landing_page_animations_logo: "start-animation",
          });
          this.handlerSetLandingPageState(
            CONSTANTS.LANDING_PAGE_STATES.DEFAULT
          );
        });

        // rotate the cube while the animation is playing
        let cube_rotation_animation = new TWEEN.Tween(
          this.state.object.rotation
        )
          .to(
            {
              x: 0,
              y: 1.5,
              z: 0,
            },
            5000
          )
          .easing(TWEEN.Easing.Quadratic.Out);

        this.setState({
          cube_animations: {
            expand: cube_expand_animation,
            rotation: cube_rotation_animation,
          },
        });

        this.setState({
          assetHasLoaded: true,
        });
      },
      // called when loading is in progresses
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      (error) => {
        console.log("An error happened", error);
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
  render_cube(time) {
    let camera = this.state.camera;
    let renderer = this.state.renderer;
    let mixer = this.state.mixer;

    if (this.resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    this.state.controls.update();

    renderer.render(this.state.scene, camera);

    var delta = this.state.clock.getDelta();

    if (mixer) mixer.update(delta);

    TWEEN.update(time);

    requestAnimationFrame(this.render_cube);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("deviceorientation", this.handleOrientation);
    window.removeEventListener("pageshow", this.pageShow);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < CONSTANTS.DESKTOP_WIDTH,
    });
  }

  /**
   * Used to provide a tilting effect from a phone
   *
   * @param {*} event From the phone tilting event
   */
  handleOrientation(event) {
    if (!this.state.isMobile) {
      return;
    }

    let beta = event.beta; // up bottom tilt
    let gamma = event.gamma; // left (negative) right (positive) tilt

    // TODO: animate this movement so it is smoother
    // We subtract from the beta (X) axis since we assume people hold their phones at that resting angle
    if (this.state.object) {
      this.state.object.rotation.set(
        -(((beta - RESTING_PHONE_ANGLE) * Math.PI) / 180) *
          CAMERA_PAN_FACTOR_MOBILE.x,
        -((gamma * Math.PI) / 180) * CAMERA_PAN_FACTOR_MOBILE.y,
        0
      );
    }
  }

  render() {
    return (
      <div
        id="landing-page"
        className={`${this.state.landing_page_state}`}
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
        onScroll={(e) => e.preventDefault()}
        onMouseMove={this.state.isMobile ? null : this._onMouseMove}
      >
        {/* Common Elements */}
        <div
          className={`landing-page-background ${
            this.state.landing_page_state
          } ${
            this.state.assetHasLoaded &&
            (this.state.landing_page_state ===
              CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LANDING_PAGE_CUBE_INTRO ||
              this.state.landing_page_state ===
                CONSTANTS.LANDING_PAGE_STATES.DEFAULT ||
              this.state.landing_page_state ===
                CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LINE_PAGE_OPEN)
              ? "visible"
              : ""
          }`}
        >
          <canvas id="landing-page-cube" />
        </div>
        <TitleTheme
          handlerSetLandingPageState={this.handlerSetLandingPageState}
          landing_page_animations_header={
            this.state.landing_page_animations_header
          }
          landing_page_state={this.state.landing_page_state}
          selectedLineIdx={this.state.selectedLineIdx}
        />
        <Logo
          landing_page_animations_header={
            this.state.landing_page_animations_logo
          }
          landing_page_state={this.state.landing_page_state}
        />
        {/* Mobile Elements */}
        <MobileOpenMenu landing_page_state={this.state.landing_page_state} />
        <MobileMenuLineList
          landing_page_state={this.state.landing_page_state}
        />
        <MobileMenuNavList
          landing_page_state={this.state.landing_page_state}
          handlerSetLandingPageState={this.handlerSetLandingPageState}
        />
        <AboutPageMobile landing_page_state={this.state.landing_page_state} />
        {/* Desktop Elements */}
        <AboutPageDesktop landing_page_state={this.state.landing_page_state} />
        <WatchPageDesktop
          countdownState={this.state.countdownState}
          landing_page_state={this.state.landing_page_state}
        />
        <PeoplePage
          handlerSetLandingPageState={this.handlerSetLandingPageState}
          landing_page_state={this.state.landing_page_state}
        />
        <DesktopSideNav
          handlerSetLandingPageState={this.handlerSetLandingPageState}
          landing_page_animations_header={
            this.state.landing_page_animations_header
          }
          landing_page_state={this.state.landing_page_state}
        />
        { this.state.landing_page_state ==
          CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LANDING_PAGE_LOAD &&
          <LandingPagePrompt
            handlerSetLandingPageState={this.handlerSetLandingPageState}
            landing_page_animations_middleTitle={
              this.state.landing_page_animations_middleTitle
            }
            landing_page_state={this.state.landing_page_state}
          />
        }
        {this.state.landing_page_state ==
          CONSTANTS.LANDING_PAGE_STATES.DEFAULT && (
          <div
            id="main-screen"
            className={`desktop ${this.state.landing_page_state}`}
          >
            <div
              className={`${this.state.fading ? "faded" : "notFaded"}`}
              id="curr-line"
            >
              <div id="line-name">
                {this.state.selectedLineIdx >= 0
                  ? `${LINE_DATA.LINE_INFO[this.state.selectedLineIdx].name}`
                  : ""}
              </div>
              <div id="below-line-name">
                <div id="designers-name">
                  {this.state.selectedLineIdx >= 0
                    ? `${UTIL.name_list_formatter(
                        LINE_DATA.LINE_INFO[this.state.selectedLineIdx]
                          .designers
                      )}`
                    : ""}
                </div>
                <div
                  id="see-more-wrapper"
                  className={
                    (this.state.selectedLineIdx >= 0 ? "show" : "") + " desktop"
                  }
                >
                  <Link
                    id="more-info"
                    to={{
                      pathname: `/lines/${this.state.selectedLineIdx + 1}`,
                      state: { currLineIdx: this.state.selectedLineIdx },
                    }}
                  >
                    <span id="more-info-text">See More</span>
                    <div id="more-info-arrow">
                      <div id="arrow" />
                    </div>
                  </Link>
                  <div
                    id="see-more-line-wrapper"
                    className={this.state.fading ? "" : "visible"}
                  >
                    <div id="see-more-dot" />
                    <div id="see-more-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Navbar
          handlerSelectedLineIdx={this.handlerSelectedLineIdx}
          landing_page_animations_navbar={
            this.state.landing_page_animations_navbar
          }
          landing_page_state={this.state.landing_page_state}
          selectedLineIdx={this.state.selectedLineIdx}
        />

        {/* Various line and dot elements */}
        <div
          className={`vertical-line ${this.state.landing_page_state} ${this.state.landing_page_animations_sidebar}`}
          id="outer-lines"
        />
        <div
          className={`vertical-line ${this.state.landing_page_state} ${this.state.landing_page_animations_sidebar}`}
          id="inner-lines"
        />
      </div>
    );
  }
}

LandingPage.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  handlePageLoad: PropTypes.func,
  page_has_loaded: PropTypes.bool,
};

export default LandingPage;
