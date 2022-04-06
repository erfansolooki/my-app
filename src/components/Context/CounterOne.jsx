// import context like expessions so we can use it
import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  //   calls actions with object distructring
  const dispatch = useCountAction();

  return (
    <div>
      <h2>counter is : {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        Click to add five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Click to decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        Click to reset
      </button>
    </div>
  );
};

export default CounterOne;
