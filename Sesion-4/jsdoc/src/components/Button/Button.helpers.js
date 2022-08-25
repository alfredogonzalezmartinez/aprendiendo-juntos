/** @module components/Button/helpers */

import { VARIETIES } from "./Button.constants";

/**
 * Checks if a variety is valid
 *
 * @typedef {import("./Button.constants").variety} variety
 *
 * @function isValidVariety
 * @param {variety} variety Variety to check
 * @returns {boolean} True if valid, false otherwise
 */
export const isValidVariety = (variety) =>
  Object.values(VARIETIES).includes(variety);
