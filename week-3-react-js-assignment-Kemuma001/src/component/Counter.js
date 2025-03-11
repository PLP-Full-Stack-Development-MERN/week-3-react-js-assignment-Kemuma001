import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <h2 className="text-lg font-semibold">Counter</h2>
      <p className="text-2xl">{count}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
