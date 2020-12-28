/**
 * Utility functions
 */

/**
 * Takes a list of names and formats them in the following format:
 *
 * 1. <First> <Last>
 * 2. <First> <Last> & <First> <Last>
 * 3. <First> <Last>, <First> <Last> & <First> <Last>
 *
 * @param {String[]} name_list List of names
 */
export function name_list_formatter (name_list) {
  let len = name_list.length;
  if (len === 1) {
    return name_list[0];
  } else if (len >= 2) {
    let format = '';

    for (let i = 0; i < len - 2; i++) {
      format += `${name_list[i]}, `;
    }

    return `${format}${name_list[len-2]} & ${name_list[len-1]}`;
  }

  // List is empty
  return '';
}