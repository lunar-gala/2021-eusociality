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
import GyroPrompt from "../components/GyroPrompt";

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
  x: 0,
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
  x: 25,
  y: 25,
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
       * @brief We have an FSM-like organization for states. We do a Moore-type
       * machine, where we perform actions and change states based on which
       * state we are in.
       */
      landing_page_state: landing_page_state,
      /** @brief Previous landing page state. */
      landing_page_state_prev: landing_page_state,
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
      mobile_show_gyro_prompt: "",
      has_seen_gyro_prompt: false,
      /** @brief Mouse position x */
      x: 0,
      /** @brief Mouse position y */
      y: 0,
      mouse_offset_x: 0,
      mouse_offset_y: 0,
      mouse_offset_z: 0,
      enable_mouse_hover: true,
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

    this.handlerShowGyroPrompt = this.handlerShowGyroPrompt.bind(this);
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
    if (
      this.state.landing_page_state ===
      CONSTANTS.LANDING_PAGE_STATES.MOBILE_LANDING_PAGE_LOAD
    ) {
      this.handlerSetLandingPageState(CONSTANTS.LANDING_PAGE_STATES.DEFAULT);
    } else if (
      this.state.landing_page_state ===
      CONSTANTS.LANDING_PAGE_STATES.MOBILE_WATCH_PAGE_OPEN
    ) {
      this.handlerSetLandingPageState(
        CONSTANTS.LANDING_PAGE_STATES.MOBILE_WATCH_PAGE_OPEN
      );
    }

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
    return;

    let gesture = GESTURE.getGesture(
      this.state.first_touch[0].x,
      this.state.current_touch[0].x,
      this.state.first_touch[0].y,
      this.state.current_touch[0].y
    );

    if (gesture === "Tap") {
      console.log(
        "[DEBUG] Tap (x, y):",
        this.state.current_touch[0].x,
        this.state.current_touch[0].y
      );
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
        if (
          gesture === "Tap" &&
          this.state.current_touch[0].y < 90 &&
          this.state.current_touch[0].x < 80
        ) {
          this.handlerSetLandingPageState(this.state.landing_page_state_prev);
        } else if (gesture === "Tap" && this.state.current_touch[0].y < 90) {
          this.handlerSetLandingPageState(
            CONSTANTS.LANDING_PAGE_STATES.DEFAULT
          );
        }
      } else {
        // Tapping the top of the default landing page opens the nav menu
        if (
          gesture === "Tap" &&
          this.state.current_touch[0].y < 90 &&
          this.state.current_touch[0].x < 270
        ) {
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
  playCubeExpand(camera_index) {
    let temp = function check_cube_progress() {
      console.log("checking cube progress", this.state.assetHasLoaded);
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
   * @param {bool} go_back If we triggered this handler from clicking the back
   * button
   */
  handlerSetLandingPageState(state, go_back = false) {
    if (state === this.state.landing_page_state) {
      return;
    }

    this.setState({
      landing_page_state_prev: this.state.landing_page_state,
    });

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
    if (
      state === CONSTANTS.LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_OPEN ||
      state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_WATCH_PAGE_OPEN
    ) {
      this.setState({
        countdownInterval: setInterval(this.updateCountdown, 1000),
        countdownState: UTIL.calculate_date_difference(CONSTANTS.SHOW_DATE),
      });
    } else if (this.state.countdownInterval) {
      clearInterval(this.state.countdownInterval);
    }

    const { history } = this.props;

    if (!go_back) {
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
  }

  /**
   * Sets the class of the gyroscope prompt
   *
   * @param {bool} show The class to apply to the gyro prompt
   */
  handlerShowGyroPrompt(gyro_class) {
    this.setState({
      mobile_show_gyro_prompt: gyro_class,
      has_seen_gyro_prompt: true,
    });
  }

  handlerSelectedLineIdx(index, go_back = false) {
    // This means we need to go to default landing page state
    if (index < 0) {
      this.setState({
        fading: true,
        selectedLineIdx: index,
      });

      return;
    }

    // Expand the cube and move the camera to the correct position
    if (!this.state.cube_has_expanded) {
      this.setState({
        cube_has_expanded: true,
      });
      this.playCubeExpand(index);
    } else {
    // Since Lorelei dropped out, we have to do this custom index change
      let camera_index = index > 0 ? index + 1 : index;

      let curr_position = {
        x: this.state.curr_camera_position.x,
        y: this.state.curr_camera_position.y,
        z: this.state.curr_camera_position.z,
      };

      new TWEEN.Tween(curr_position)
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
          this.state.camera.position.set(
            curr_position.x + this.state.mouse_offset_x,
            curr_position.y + this.state.mouse_offset_y,
            curr_position.z + this.state.mouse_offset_z
          );

          this.setState({
            curr_camera_position: {
              x: curr_position.x,
              y: curr_position.y,
              z: curr_position.z,
            },
          });
        })
        .start();
    }

    /**
     * Put the line number in the url. We want this because
     *
     * 1. If a user navigates to /6, then the 6th line should show up, without
     *    all the transition stuff
     * 2. If a user navigates to the line page and then goes back, they should
     *    be able to go the line they came from
     */
    if (!go_back) {
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
    if (!this.state.enable_mouse_hover) {
      return;
    }

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

    let mouse_offset_x = Math.sin(phi) * CAMERA_PAN_FACTOR_DESKTOP.x;
    let mouse_offset_y = Math.sin(theta) * CAMERA_PAN_FACTOR_DESKTOP.y;
    let mouse_offset_z =
      -Math.pow(Math.cos(kappa), 2) * CAMERA_PAN_FACTOR_DESKTOP.z;

    this.setState({
      mouse_offset_x: mouse_offset_x,
      mouse_offset_y: mouse_offset_y,
      mouse_offset_z: mouse_offset_z,
    });

    if (this.state.curr_camera_position) {
      this.state.camera.position.set(
        this.state.curr_camera_position.x + mouse_offset_x,
        this.state.curr_camera_position.y + mouse_offset_y,
        this.state.curr_camera_position.z + mouse_offset_z
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
        const currPathMatches = regexFindPathName.exec(
          this.props.location.pathname
        );

        /**
         * Since going to the default state resets the selected line index, we
         * have to reset it if we go back to a selected line index url
         */
        if (
          currPathMatches !== null &&
          currPathMatches.length >= 1 &&
          !isNaN(currPathMatches[1])
        ) {
          const line_number = parseInt(currPathMatches[1]) - 1;

          if (line_number >= 0 && line_number < LINE_DATA.LINE_INFO.length) {
            this.handlerSelectedLineIdx(line_number, true);
          }
        } else {
          this.handlerSetLandingPageState(
            this.state.isMobile
              ? CONSTANTS.PATH_TO_STATE["mobile_nav"][
                  UTIL.return_first_regex_match(regexFindPathName, loc.pathname)
                ]
              : CONSTANTS.PATH_TO_STATE["desktop_nav"][
                  UTIL.return_first_regex_match(regexFindPathName, loc.pathname)
                ],
            true
          );
        }
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

    var gui = new GUI();

    gui.add(camera.position, 'x', -1000,1000).step(1);
    gui.add(camera.position, 'y', -1000,1000).step(1);
    gui.add(camera.position, 'z', -1000,1000).step(1);
    gui.add(this.state, "enable_mouse_hover").name("mouse hover").onChange((newValue) => {
      this.setState({
        enable_mouse_hover: newValue
      });
    });
    gui.add(iridescence_texture_outline, 'filmThickness').min(100).max(1000);
    gui.add(iridescence_texture_outline, 'refractiveIndexFilm').min(1).max(5);
    gui.add(iridescence_texture_outline, 'refractiveIndexBase').min(1).max(5);
    gui.add(iridescence_material_outline, 'boost').min(1).max(50);
    gui.add(iridescence_material_outline, 'iridescenceRatio').min(0).max(10);
    gui.add(iridescence_material_outline, 'baseTextureRatio').min(0).max(10);
    gui.add(iridescence_material_outline, 'brightness').min(0).max(10);
    gui.close();

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
        <MobileOpenMenu
          handlerSetLandingPageState={this.handlerSetLandingPageState}
          handlerShowGyroPrompt={this.handlerShowGyroPrompt}
          has_seen_gyro_prompt={this.state.has_seen_gyro_prompt}
          landing_page_state={this.state.landing_page_state}
          landing_page_state_prev={this.state.landing_page_state_prev}
          mobile_show_gyro_prompt={this.state.mobile_show_gyro_prompt}
        />
        <MobileMenuLineList
          landing_page_state={this.state.landing_page_state}
        />
        <MobileMenuNavList
          landing_page_state={this.state.landing_page_state}
          handlerSetLandingPageState={this.handlerSetLandingPageState}
        />
        <AboutPageMobile landing_page_state={this.state.landing_page_state} />
        <GyroPrompt
          mobile_show_gyro_prompt={this.state.mobile_show_gyro_prompt}
        />
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
        <LandingPagePrompt
          handlerSetLandingPageState={this.handlerSetLandingPageState}
          landing_page_animations_middleTitle={
            this.state.landing_page_animations_middleTitle
          }
          landing_page_state={this.state.landing_page_state}
        />
        <div
          id="main-screen"
          className={`desktop ${this.state.landing_page_state}`}
        >
          <div
            className={`${this.state.fading ? "faded" : "notFaded"}`}
            id="curr-line"
          >
            <div id="above-line-name">
              <div id="line-name">
                {this.state.selectedLineIdx >= 0
                  ? `${LINE_DATA.LINE_INFO[this.state.selectedLineIdx].name}`
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
                  <span id="more-info-text">See More →</span>
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
            <div id="below-line-name">
              <div id="designers-name">
                {this.state.selectedLineIdx >= 0
                  ? `${UTIL.name_list_formatter(
                      LINE_DATA.LINE_INFO[this.state.selectedLineIdx].designers
                    )}`
                  : ""}
              </div>
            </div>
          </div>
        </div>
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
