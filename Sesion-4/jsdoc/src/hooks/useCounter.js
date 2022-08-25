/** @module hooks/useCounter */

import { useState } from "react";

/**
 * @typedef {Object} counter
 * @property {number} count The current count.
 * @property {function} increase Increases the count.
 * @property {function} decrease Decreases the count.
 * @property {function} reset Resets the count.
 */

/**
 * Hook to use a counter
 * @function useCounter
 * @param {Object} [options] Configuration options
 * @param {number} [options.initialValue=0] Initial value of the counter
 * @param {number} [options.step=1] Amount to increase or decrease the counter
 * @param {number} [options.min] Minimum value of the counter
 * @param {number} [options.max] Maximum value of the counter
 * @returns {counter} A counter object
 *
 * @example <caption>Basic usage:</caption>
 * const counter = useCounter();
 * @example <caption>With destructuring:</caption>
 * const { count, increase, decrease, reset } = useCounter();
 * @example <caption>With custom options:</caption>
 * const counter = useCounter({
 *  initialValue: 10,
 *  step: 2,
 *  min: 0,
 *  max: 20
 * });
 * @example <caption>Usage in a component:</caption>
 * const Counter = () => {
 *  const { count, increase, decrease, reset } = useCounter();
 *  return (
 *   <div>
 *    <p>Count: {count}</p>
 *    <button onClick={() => increase()}>+</button>
 *    <button onClick={() => decrease()}>-</button>
 *    <button onClick={() => reset()}>Reset</button>
 *   </div>
 *  );
 * }
 */
export const useCounter = ({ initialValue = 0, step = 1, min, max }) => {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    if (max && count >= max) return;
    setCount((prevCount) => {
      let newCount = prevCount + step;
      if (newCount > max) newCount = Math.min(max, newCount);
      return newCount;
    });
  };

  const decrease = () => {
    if (min && count <= min) return;
    setCount((prevCount) => {
      let newCount = prevCount - step;
      if (newCount < min) newCount = Math.max(min, newCount);
      return newCount;
    });
  };

  const reset = () => setCount(initialValue);

  return { count, increase, decrease, reset };
};
