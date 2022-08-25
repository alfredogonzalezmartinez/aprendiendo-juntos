/** @module components/Button */

import { DEFAULT_VARIETY } from "./Button.constants";
import { isValidVariety } from "./Button.helpers";

import styles from "./Button.styles.module.css";

/**
 * Button component
 *
 * @typedef {import("./Button.constants").variety} variety
 * @typedef {import("react").MouseEventHandler<HTMLButtonElement>} MouseEventHandler
 * @typedef {import("react").ReactNode} ReactNode
 *
 * @function Button
 * @param {Object} props Component props
 * @param {variety} [props.variety=DEFAULT_VARIETY] Variant of the button
 * @param {MouseEventHandler} [props.onClick] On click event handler
 * @param {ReactNode} [props.children] Button content
 * @returns {JSX.Element} React component
 *
 * @example <caption>Basic usage:</caption>
 * <Button>Click me</Button>
 * @example <caption>With custom values:</caption>
 * <Button variety="secondary" onClick={()=>alert("hi")}>Click me</Button>
 */
const Button = ({ variety = DEFAULT_VARIETY, onClick, children }) => {
  variety = isValidVariety(variety) ? variety : DEFAULT_VARIETY;
  const className = `${styles.button} ${styles[variety]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
