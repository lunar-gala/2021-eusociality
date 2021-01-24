/**
 * Constants for project
 */

/** @brief Title shown on the landing screen */
export const LANDING_PAGE_TITLE = 'COLLECTIVA';

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
  DEFAULT: 'default',
  MOBILE_ABOUT_PAGE_OPEN: 'mobile-about-page-open',
  MOBILE_LINE_MENU_OPEN: 'mobile-line-menu-open',
  MOBILE_NAV_MENU_OPEN: 'mobile-nav-menu-open',
  MOBILE_PEOPLE_PAGE_OPEN: 'mobile-people-page-open'
};

export const PATH_TO_STATE = {
  'about': LANDING_PAGE_STATES.MOBILE_ABOUT_PAGE_OPEN,
  'lines': LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN,
  'people': LANDING_PAGE_STATES.MOBILE_PEOPLE_PAGE_OPEN
};

export const STATE_TO_PATH = {
  'default': '/',
  'mobile-about-page-open': '/about',
  'mobile-line-menu-open': '/lines',
  'mobile-people-page-open': 'people'
};

/** @brief Width of screen we consider to be a desktop */
export const DESKTOP_WIDTH = 768;

/** @brief Info for mobile nav menu links */
export const NAV_LINK_INFO = [
  {
    name: 'LINES',
    link_name: 'lines',
    landing_page_state: LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN
  },
  {
    name: 'ABOUT',
    link_name: 'about',
    landing_page_state: LANDING_PAGE_STATES.MOBILE_ABOUT_PAGE_OPEN
  },
  {
    name: 'PEOPLE',
    link_name: 'people'
  },
  {
    name: 'WATCH',
    link_name: 'watch'
  }
];

export const ABOUT_TEXT = 'Nobody is ever entirely independent. We all make \
up nodes in the dense, massively complex network that is our global society. \
We rely on the contributions of countless other people to carry out even the \
basic tasks of our everyday lives, and there is almost nothing we do that    \
doesn’t affect someone else. Lunar Gala 2021: COLLECTIVA invites us not only \
to recognize and celebrate the work that others have done to allow us to     \
carry out our lives, but also to pause and reflect on a system that so often \
ignores, forgets, and devalues the so much fundamental work necessary to its \
existence.';

export const ABOUT_HEADER_TEXT = 'COLLECTIVA explores the interdependence of our community.';

/** @brief Three.js environment settings */
export const LANDING_PAGE_BACKGROUND_COLOR = 0x000000;

/** @brief Animation duration in ms for the landing page exploding cube */
export const ANIMATION_DURATION = 3000;

/** @brief Iridescence texture constants */
export const IRIDESCENCE_SETTINGS_MAIN = {
  THICKNESS: 293,
  REFRACTIVE_INDEX_FILM: 1.5,
  REFRACTIVE_INDEX_BASE: 2.3,
  BOOST: 2,
  BASE_TEXTURE_RATIO: 0.52,
  IRIDESCENT_TEXTURE_RATIO: 0.75,
  BRIGHTNESS: 1.2,
  TEXTURE_ZOOM: 0.3,
  SIZE: 64
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
  SIZE: 64
};