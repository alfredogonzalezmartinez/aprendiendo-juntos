import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button
        className="counter"
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </button>
    </div>
  );
}
