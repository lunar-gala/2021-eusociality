/**
 * Constants for project
 */

// Shown at the top of the landing page
export const LANDING_PAGE_TITLE = 'COLLECTIVA';

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
];

/**
 * Line names in order, with their respective designers
 */
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
  z: 300
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