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

// Name for all the lines
// TODO: maybe deprecate this in favor of the more stacked LINE_INFO
export const LINE_NAMES = [
  'Bloom',
  'Bound',
  'Chrysophyta',
  'Digital Warfare',
  'Duration',
  'Gossamer Idle',
  'Icarus',
  'Invasion',
  'Heroine',
  'The Marianas Trench',
  'Mirror',
  'Nexus',
  'Obfuscate',
  'Relinquo',
  'Rensaci',
  'Somatic'
]

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

/** @brief Default camera position */
export const CAMERA_POSITION = {
  x: 0,
  y: 30,
  z: 400
};

/** @brief */
export const CAMERA_PAN_X_FACTOR = 10;
export const CAMERA_PAN_Y_FACTOR = 10;
export const CAMERA_PAN_Z_FACTOR = 10;

/** @brief Animation duration in ms for the landing page exploding cube */
export const ANIMATION_DURATION = 3000;

/** @brief Iridescence texture constants */
export const IRIDESCENCE_FILM_THICKNESS = 225;
export const IRIDESCENCE_REFRACTIVE_INDEX_FILM = 1.7;
export const IRIDESCENCE_REFRACTIVE_INDEX_BASE = 4.3;
export const IRIDESCENCE_BOOST = 3;
export const IRIDESCENCE_FILM_SIZE = 64;