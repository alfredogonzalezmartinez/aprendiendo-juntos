import { useState } from "react";
import styles from "../styles/Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <button
        className={styles.counter}
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </button>
    </div>
  );
}
