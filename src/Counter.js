import { React, useState } from "react";

function Counter() {
  // define state using useState
  const [count, setCount] = useState(0);
  // here anything can be a default value eg string, obj

  return (
    <div>
      <h2> This is a Clik Bait Counter Value {count} </h2>
      <br />
      <button onClick={() => (count > 5 ? "" : setCount(count + 1))}>
        Increment
      </button>{" "}
      <br />
      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>
        Decrement
      </button>{" "}
      <br />
      <button onClick={() => setCount(0)}>Reset</button> <br />
    </div>
  );
}

export default Counter;
