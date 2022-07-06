import { useState } from "react";

export default function Counter({ className = "" }) {
  const [count, setCount] = useState(0);

  return (
    <button
      className={className}
      type="button"
      onClick={() => setCount((count) => count + 1)}
    >
      count is: {count}
    </button>
  );
}
