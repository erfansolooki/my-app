import { useReducer } from "react";

const intialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
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
  //  Instead of turning the initialstate into an object and complicating our actions, I write two usereducers.
  const [count, dispacth] = useReducer(reducer, intialState);
  const [countTwo, dispacthTwo] = useReducer(reducer, intialState);

  return (
    <div>
      <div>
        <h2> counter is : {count}</h2>

        {/* To make the action dynamic, we add a value to it as a second drag property */}
        <button onClick={() => dispacth({ type: "add", value: 5 })}>
          Click to add five
        </button>
        <button onClick={() => dispacth({ type: "decrement", value: 1 })}>
          Click to decerement
        </button>
        <button onClick={() => dispacth({ type: "reset" })}>
          Click to reset
        </button>
      </div>
      <div>
        <h2> counter Two is : {countTwo}</h2>
        {/* To make the action dynamic, we add a value to it as a second drag property */}
        <button onClick={() => dispacthTwo({ type: "add", value: 2 })}>
          Click to add Two
        </button>
        <button onClick={() => dispacthTwo({ type: "decrement", value: 1 })}>
          Click to decerement
        </button>
        <button onClick={() => dispacthTwo({ type: "reset" })}>
          Click to reset
        </button>
      </div>
    </div>
  );
};

export default CounterReducer;
