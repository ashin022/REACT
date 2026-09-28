import React, { useState } from "react";

const WithOutMemoEx = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const expensiveCalculation = () => {
    console.log("Calculation running...");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += number;
    }

    return result;
  };

  return (
    <div>
      <h2>Without useMemo</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h3>Number: {number}</h3>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <p>Result: {expensiveCalculation()}</p>
    </div>
  );
};

export default WithOutMemoEx;