/**
 * Utility functions
 */


/**
 * Formats the line numbers in the way we want in the site.
 *
 * E.g.
 *
 * 0  => 01
 * 3  => 03
 * 9  => 10
 * 10 => 11
 *
 * Doesn't support anything above 98, but we only have 16 lines in the show
 * anyway.
 *
 * @param {Int} index Raw index in the array. E.g. 0 for the 1st line.
 */
export function line_number_formatter(index) {
  if (index < 9) {
    return `0${index + 1}`;
  } else {
    return `${index + 1}`;
  }
}

/**
 * Takes a list of names and formats them in the following format:
 *
 * 1. <First> <Last>
 * 2. <First> <Last> & <First> <Last>
 * 3. <First> <Last>, <First> <Last> & <First> <Last>
 *
 * @param {String[]} name_list List of names
 */
export function name_list_formatter(name_list) {
  let len = name_list.length;
  if (len === 1) {
    return name_list[0];
  } else if (len >= 2) {
    let format = "";

    for (let i = 0; i < len - 1; i++) {
      format += `${name_list[i]}, `;
    }

    return `${format} ${name_list[len - 1]}`;
  }

  // List is empty
  return "";
}