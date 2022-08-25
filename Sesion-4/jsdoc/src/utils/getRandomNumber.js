/** @module utils/getRandomNumber */

/**
 * Generates a random integer number
 * @function getRandomNumber
 * @param {number} [min=0] Minimum value
 * @param {number} [max=10] Maximum value
 * @returns {number} Random integer number between min and max
 *
 * @example <caption>Generates a random integer number between 0 and 10:</caption>
 * getRandomNumber();
 * @example <caption>Generates a random integer number between 100 and 999:</caption>
 * getRandomNumber(100, 999);
 */
export const getRandomNumber = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
