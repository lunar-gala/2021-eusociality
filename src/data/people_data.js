/**
 * Contains data for all of the people, their corresponding headshots, and other info.
 */

/** @brief Photo format. We are using JPEG because it compresses much better than other formats. */
export const PHOTO_FORMAT = 'jpg';

/**
 * @brief List of people by their Andrew IDs as the key, and metadata as values.
 *
 * NOTE: please keep this in alphabetical order to make it easy to edit and navigate!
 */
export const PEOPLE_DATA = {
  ajafrani: {
    name: 'Amal Jafrani',
    position: 'Co-Head Director'
  },
  apao: {
    name: 'Annalisa Pao',
    position: 'Head of Web'
  },
  christi5: {
    name: 'Christina Li',
    position: 'Head of PR'
  },
  cmedward: {
    name: 'Clayton Edwards',
    position: 'Designer'
  },
  dongwonl: {
    name: 'Dong Won Lee',
    position: 'Dancer'
  }
};

/**
 * @brief Puts people in their teams, in order.
 */
export const PEOPLE_TEAMS = {
  PRODUCERS: [
    'ajafrani',
    'apao',
    'christi5',
    'ajafrani',
    'apao',
    'christi5',
    'ajafrani',
    'apao',
    'christi5',
    'cmedward'
  ],
  PRODUCTION: [
    'christi5',
    'ajafrani',
    'apao',
    'christi5',
    'ajafrani',
    'apao',
    'christi5',
    'ajafrani',
    'apao',
    'cmedward'
  ],
  CREATIVE: [
    'apao',
    'cmedward',
    'dongwonl',
    'apao',
    'dongwonl',
    'cmedward',
    'apao',
    'cmedward',
    'dongwonl',
    'apao',
    'dongwonl',
    'cmedward',
    'christi5'
  ],
  DESIGN: [
    'ajafrani',
    'apao',
    'christi5',
    'apao',
    'christi5',
    'dongwonl',
    'christi5',
    'apao',
    'christi5',
    'dongwonl'
  ],
  MODEL: [
    'ajafrani',
    'apao',
    'cmedward',
    'christi5',
    'ajafrani',
    'apao',
    'cmedward',
    'christi5',
    'ajafrani',
    'apao',
    'cmedward',
    'christi5'
  ],
  DANCE: [
    'dongwonl',
    'apao',
    'christi5',
    'apao',
    'dongwonl',
    'christi5',
    'ajafrani'
  ]
};