/**
 * Constants for project
 */

/** @brief Title shown on the landing screen */
export const LANDING_PAGE_TITLE = "COLLECTIVA";

/**
 * @brief State management for the landing page.
 *
 * I think for now, we can keep _all_ of the states here, desktop, iPad,
 * mobile, etc. Realistically, only each surface type will use their states, so
 * when we are on mobile, it shouldn't affect any desktop styles.
 *
 * These will also double as class names, so you can reference these in the
 * styles.
 *
 * NOTE: Javascript doesn't have enums, but this is supposed to behave like
 * one. This means to make all the states have distinct values.
 */
export const LANDING_PAGE_STATES = {
  DEFAULT: "default",

  // Mobile states
  MOBILE_LANDING_PAGE_LOAD: "mobile-landing-page-load",
  MOBILE_ABOUT_PAGE_OPEN: "mobile-about-page-open",
  MOBILE_LINE_MENU_OPEN: "mobile-line-menu-open",
  MOBILE_NAV_MENU_OPEN: "mobile-nav-menu-open",
  MOBILE_PEOPLE_PAGE_OPEN: "mobile-people-page-open",
  MOBILE_WATCH_PAGE_OPEN: "mobile-watch-page-open",

  // Desktop states
  DESKTOP_LANDING_PAGE_LOAD: "desktop-landing-page-load",
  DESKTOP_LANDING_PAGE_CUBE_INTRO: "desktop-landing-page-cube-intro",
  DESKTOP_ABOUT_PAGE_LOAD: "desktop-about-page-load",
  DESKTOP_ABOUT_PAGE_OPEN: "desktop-about-page-open",
  DESKTOP_LINE_PAGE_LOAD: "desktop-line-page-load",
  DESKTOP_LINE_PAGE_OPEN: "desktop-line-page-open",
  DESKTOP_PEOPLE_PAGE_LOAD: "desktop-people-page-load",
  DESKTOP_PEOPLE_PAGE_OPEN: "desktop-people-page-open",
  DESKTOP_WATCH_PAGE_LOAD: "desktop-watch-page-load",
  DESKTOP_WATCH_PAGE_OPEN: "desktop-watch-page-open",

  // Line page
  LINE_PAGE: "line-page",
};

export const PATH_TO_STATE = {
  mobile: {
    start: LANDING_PAGE_STATES.MOBILE_LANDING_PAGE_LOAD,
    about: LANDING_PAGE_STATES.MOBILE_ABOUT_PAGE_OPEN,
    lines: LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN,
    people: LANDING_PAGE_STATES.MOBILE_PEOPLE_PAGE_OPEN,
    watch: LANDING_PAGE_STATES.MOBILE_WATCH_PAGE_OPEN,
  },
  mobile_nav: {
    "": LANDING_PAGE_STATES.DEFAULT,
    about: LANDING_PAGE_STATES.MOBILE_ABOUT_PAGE_OPEN,
    lines: LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN,
    people: LANDING_PAGE_STATES.MOBILE_PEOPLE_PAGE_OPEN,
    watch: LANDING_PAGE_STATES.MOBILE_WATCH_PAGE_OPEN,
  },
  /**
   * For many of the desktop states, we start with the load state instead of
   * the open state, so we can trigger load animations.
   */
  desktop: {
    start: LANDING_PAGE_STATES.DESKTOP_LANDING_PAGE_LOAD,
    about: LANDING_PAGE_STATES.DESKTOP_ABOUT_PAGE_LOAD,
    people: LANDING_PAGE_STATES.DESKTOP_PEOPLE_PAGE_LOAD,
    watch: LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_LOAD,
  },
  desktop_nav: {
    "": LANDING_PAGE_STATES.DEFAULT,
    about: LANDING_PAGE_STATES.DESKTOP_ABOUT_PAGE_OPEN,
    people: LANDING_PAGE_STATES.DESKTOP_PEOPLE_PAGE_OPEN,
    watch: LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_OPEN,
  },
};

export const STATE_TO_PATH = {
  default: "/",
  "mobile-about-page-open": "/about",
  "mobile-line-menu-open": "/lines",
  "mobile-people-page-open": "/people",
  "mobile-watch-page-open": "/watch",
  "desktop-about-page-open": "/about",
  "desktop-watch-page-open": "/watch",
  "desktop-people-page-open": "/people",
};

/** @brief Width of screen we consider to be a desktop */
export const DESKTOP_WIDTH = 768;

/** @brief List of team names used in the people page */
export const TEAM_NAMES = [
  "Producers",
  "Design",
  "Model",
  "Entertainment",
  "Production",
  "Creative",
  "Public Relations",
  "Cinematography",
];

/** @brief Info for mobile nav menu links */
export const NAV_LINK_INFO = [
  {
    name: "LINES",
    link_name: "lines",
    landing_page_state: LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN,
  },
  {
    name: "ABOUT",
    link_name: "about",
    landing_page_state: LANDING_PAGE_STATES.MOBILE_ABOUT_PAGE_OPEN,
  },
  {
    name: "PEOPLE",
    link_name: "people",
    landing_page_state: LANDING_PAGE_STATES.MOBILE_PEOPLE_PAGE_OPEN,
  },
  {
    name: "WATCH",
    link_name: "watch",
    landing_page_state: LANDING_PAGE_STATES.MOBILE_WATCH_PAGE_OPEN,
  },
];

export const ABOUT_TEXT =
  "Lunar Gala 2021: COLLECTIVA explores everyone’s role in an interdependent \
  society. Each of our actions ricochet throughout the world, impacting      \
  faraway places and people who we don’t know. Sometimes it can be hard to   \
  forget that we’re not alone, that we’re part of a complex and connected    \
  world. Our communities function as networks that would collapse without    \
  the everyday work of others. Instead of erasing anyone, we want to honor   \
  them and uplift their hard work. Imagine a world where everyone is not     \
  only remembered but celebrated as an essential node in a greater           \
  network of COLLECTIVA.";

export const ABOUT_HEADER_TEXT =
  "Existence is interdependent."
  // "COLLECTIVA explores the interdependence of our community.";

/** @brief Three.js environment settings */
export const LANDING_PAGE_BACKGROUND_COLOR = 0x000000;

/** @brief Animation duration in ms for the landing page exploding cube */
export const ANIMATION_DURATION = 3000;

/** @brief Iridescence texture constants */
export const IRIDESCENCE_SETTINGS_MAIN = {
  THICKNESS: 293,
  REFRACTIVE_INDEX_FILM: 1.5,
  REFRACTIVE_INDEX_BASE: 2.6,
  BOOST: 17.9,
  IRIDESCENT_TEXTURE_RATIO: 0.96,
  BASE_TEXTURE_RATIO: 0.52,
  BRIGHTNESS: 0.3,
  TEXTURE_ZOOM: 0.8,
  SIZE: 64,
};

/**
 * @brief Iridescence texture for the atom outline elements. These are supposed
 * to be bright white, so I just turned up the boost a ton.
 */
export const IRIDESCENCE_SETTINGS_OUTLINE = {
  THICKNESS: 100,
  REFRACTIVE_INDEX_FILM: 5,
  REFRACTIVE_INDEX_BASE: 1,
  BOOST: 50,
  SIZE: 64,
};

/** @brief Date of the show. Used in the watch page to calculate the countdown. */
export const SHOW_DATE = new Date(Date.parse("10 Apr 2021 20:30:00 EDT"));
