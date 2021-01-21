/**
 * Constants for project
 */

/** @brief Title shown on the landing screen */
export const LANDING_PAGE_TITLE = 'COLLECTIVA';

/**
 * @brief State management for the landing page.
 *
 * I think for now, we can keep _all_ of the states here, desktop, iPad,
 * mobile, etc.
 *
 * These will also double as class names, so you can reference these in the
 * styles.
 *
 * NOTE: Javascript doesn't have enums, but this is supposed to behave like
 * one. This means to make all the states have distinct values.
 */
export const LANDING_PAGE_STATES = {
  DEFAULT: 'default',
  MOBILE_LINE_MENU_OPEN: 'mobile-line-menu-open',
  MOBILE_NAV_MENU_OPEN: 'mobile-nav-menu-open',
};

/** @brief Width of screen we consider to be a desktop */
export const DESKTOP_WIDTH = 768;

export const NAV_LINK_INFO = [
  {
    name: 'LIVESTREAM',
    link_name: 'about'
  },
  {
    name: 'ABOUT',
    link_name: 'about'
  },
  {
    name: 'PEOPLE',
    link_name: 'people'
  }
];


/** @brief Line names in order, with their respective designers */
export const LINE_INFO = [
  {
    name: 'Gossamer Idle',
    designers: [
      'Elise Chapman',
      'Jessica Lai'
    ]
  },
  {
    name: 'Heroine',
    designers: [
      'Lena Li',
      'Linda Lin'
    ]
  },
  {
    name: 'Nexus',
    designers: [
      'Annalisa Pao'
    ]
  },
  {
    name: 'Chrysophyta',
    designers: [
      'Iz Horgan'
    ]
  },
  {
    name: 'Mirror',
    designers: [
      'Khushi Nandgoankar',
      'Kathy Zhang'
    ]
  },
  {
    name: 'The Marianas Trench',
    designers: [
      'Lily Oberman',
      'Skylar McAuliffe'
    ]
  },
  {
    name: 'Obfuscate',
    designers: [
      'Arushi Bandi',
      'Maya Pandagurun'
    ]
  },
  {
    name: 'Salvos',
    designers: [
      'Patricia Yu'
    ]
  },
  {
    name: 'Bloom',
    designers: [
      'Natalie Waldram',
      'Amal Jafrani'
    ]
  },
  {
    name: 'Rensaci',
    designers: [
      'Aadya Bhartia',
    ]
  },
  {
    name: 'Bound',
    designers: [
      'Owen Haft',
      'Carmen Yu',
    ]
  },
  {
    name: 'Invasion',
    designers: [
      'Olivia Luk',
    ]
  },
  {
    name: 'Somatic',
    designers: [
      'Jessa Westheimer'
    ]
  },
  {
    name: 'Relinquo',
    designers: [
      'Kwins Yang',
      'Jacky Tian'
    ]
  },
  {
    name: 'Digital Warfare',
    designers: [
      'Cassie Scheirer',
      'Madi Davis'
    ]
  },
  {
    name: 'Icarus',
    designers: [
      'Vincent Derienzo',
      'Leah Kendrick',
      'Tyng Peck'
    ]
  }
];

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