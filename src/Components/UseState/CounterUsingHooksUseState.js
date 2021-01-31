// Use rfce snippet to create a functional component
// The ES7 React Snippet lets you do that (Install extension first)
import React, { useState } from "react";

function CounterUsingHooksUseState() {
  // Use Array destructuring and useState
  const [count, setCount] = useState(0);
  const addone= setCount  (count + 1);

  return (
    <div>
      <button onClick={addone}>Count: {count}</button>
    </div>
  );
}

export default CounterUsingHooksUseState;
