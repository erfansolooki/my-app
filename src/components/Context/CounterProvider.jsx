import React, { useState, useContext, useReducer } from "react";

// 1. Creat context Component with React.creatContext
// 2. export context Component
const CounterContext = React.createContext(); // for show state
const CounterContextDispather = React.createContext(); // for setState

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

const CounterProvider = ({ children }) => {
  const [counter, dispatch] = useReducer(reducer, intialState);
  // 3. provide CounterContext.Provider to access it
  return (
    <CounterContext.Provider value={counter}>
      <CounterContextDispather.Provider value={dispatch}>
        {children}
      </CounterContextDispather.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
// write actions where ever your useContext is
export const useCountAction = () => {
  return useContext(CounterContextDispather);
  // const addOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const addFive = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };

  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };
  // // where ever useCountActon calls it's return the actions it's have
  // return { addOne, addFive, decrement };
};
