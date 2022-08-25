/** @module components/Button/constants */

/**
 * Available button variations.
 * @typedef {'primary'|'secondary'} variety
 */

/**
 * Enum of button variations.
 * @readonly
 * @constant
 */
export const VARIETIES = {
  /**@type {"primary"}*/ PRIMARY: "primary",
  /**@type {"secondary"}*/ SECONDARY: "secondary",
};

/**
 * Default button variant.
 * @type {variety}}
 * @constant
 */
export let DEFAULT_VARIETY = VARIETIES.PRIMARY;
