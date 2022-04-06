import { useReducer, useState } from "react";

const intialState = {
  firstCounter: 0,
  secondryCounter: 0,
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "add2":
      return {
        ...state,
        secondryCounter: state.secondryCounter + action.value,
      };
    case "decrement2":
      return {
        ...state,
        secondryCounter: state.secondryCounter - action.value,
      };
    case "reset":
      return intialState;
    default:
      return state;
  }
};

const CounterReducer = () => {
  //   const [count, setCount] = useState(0);
  // steps for using useReducer()
  //   1. import useReducer
  //   useReducer get two enteries : first one is function , second one is first state for show
  const [count, dispacth] = useReducer(reducer, intialState);
  return (
    <div>
      <h2> counter is : {count.firstCounter}</h2>
      <h2> counter is : {count.secondryCounter}</h2>
      {/* To make the action dynamic, we add a value to it as a second drag property */}
      <button onClick={() => dispacth({ type: "add", value: 1 })}>
        Click to add one
      </button>
      <button onClick={() => dispacth({ type: "add", value: 5 })}>
        Click to add five
      </button>
      <button onClick={() => dispacth({ type: "decrement", value: 1 })}>
        Click to decerement
      </button>
      <button onClick={() => dispacth({ type: "add2", value: 1 })}>
        Click to add one
      </button>
      <button onClick={() => dispacth({ type: "decrement2", value: 1 })}>
        Click to decerement
      </button>
      <button onClick={() => dispacth({ type: "reset" })}>
        Click to reset
      </button>
    </div>
  );
};

export default CounterReducer;
