/** @module components/Counter */

import { useCounter } from "../../hooks/useCounter";
import Button from "../Button";

/**
 * Counter component
 * @function Counter
 * @param {Object} props Component props
 * @param {number} [props.initialValue=0] Initial value of the counter
 * @param {number} [props.step=1] Amount to increase or decrease the counter
 * @param {number} [props.min] Minimum value of the counter
 * @param {number} [props.max] Maximum value of the counter
 * @returns {JSX.Element} React component
 *
 * @example <caption>Basic usage:</caption>
 * <Counter />
 * @example <caption>With custom values:</caption>
 * <Counter initialValue={10} step={2} min={0} max={20} />
 */

const Counter = ({ initialValue = 0, step = 1, min, max }) => {
  const { count, increase, decrease, reset } = useCounter({
    initialValue,
    step,
    min,
    max,
  });
  return (
    <>
      <p>{count}</p>
      <Button onClick={() => increase()}>+</Button>
      <Button onClick={() => decrease()}>-</Button>
      <Button variety="secondary" onClick={() => reset()}>
        Reset
      </Button>
    </>
  );
};

export default Counter;
