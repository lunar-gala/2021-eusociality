/**
 * Library for dealing with touch events on mobile.
 *
 * Adapted from https://gist.github.com/danklammer/dc42eb8511e70abf5e83#file-jsbin-demo
 */

/** @brief How much the user has to move their finger to be considered a swipe */
const SWIPE_TOLERANCE = 30;

/**
 * @param {object} event Event object
 * @return {Array.<object>}
 */
export function getTouchesList (event) {
  let e = event.originalEvent || event;
  return e['touches'] || [e];
}

/**
 * @param {Array} touches Touches list
 * @param {number} fingers Count of fingers
 * @return {Array.<{ x: {number}, y: {number} }>}
 */
export function getFingerPosition (touches, fingers) {
  let result = [],
      i = 0;
  touches = touches[0]['targetTouches'] ? touches[0]['targetTouches'] : touches;
  while (i < fingers) {
      result.push({
          x: touches[i].pageX,
          y: touches[i].pageY
      });
      i++;
  }
  return result;
}

/**
 * @param {number} x1 Start "X" point
 * @param {number} x2 End "X" point
 * @param {number} y1 Start "Y" point
 * @param {number} y2 End "Y" point
 *
 * @returns 5 types --
 * - Left
 * - Right
 * - Up
 * - Down
 * - Tap
 */
export function getGesture (x1, x2, y1, y2) {
  if (Math.abs(x1 - x2) > SWIPE_TOLERANCE || Math.abs(y1-y2) > SWIPE_TOLERANCE) {
    if (Math.abs(x1 - x2) >= Math.abs(y1 - y2)) {
        return (x1 - x2 > 0) ? 'Left' : 'Right';
    } else {
        return (y1 - y2 > 0) ? 'Up' : 'Down';
    }
  } else {
    return 'Tap';
  }
}
