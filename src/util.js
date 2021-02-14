/**
 * Utility functions
 */
import * as CONSTANTS from './constants';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _MS_PER_HOUR = 1000 * 60 * 60;
const _MS_PER_MINUTE = 1000 * 60;
const _MS_PER_SECOND = 1000;

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

/**
 * Returns the number of days, hours, minutes, and seconds between the current
 * time and the target date.
 */
export function calculate_date_difference (target_date) {
  let difference = target_date - Date.now();

  let num_days = Math.floor(difference / _MS_PER_DAY);
  difference = difference - num_days * _MS_PER_DAY;
  let num_hours = Math.floor(difference / _MS_PER_HOUR);
  difference = difference - num_hours * _MS_PER_HOUR;
  let num_minutes = Math.floor(difference / _MS_PER_MINUTE);
  difference = difference - num_minutes * _MS_PER_MINUTE;
  let num_seconds = Math.floor(difference / _MS_PER_SECOND);

  return {
    days: num_days,
    hours: num_hours,
    minutes: num_minutes,
    seconds: num_seconds
  };
}

/**
 * Formats a Date object into
 *
 * MM/DD/YYYY
 * HH:MM (AM/PM)
 *
 * @param {Date} date Date object
 */
export function format_date (date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  return {
    date: `${month}/${day}/${year}`,
    time: `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} EST`
  };
}