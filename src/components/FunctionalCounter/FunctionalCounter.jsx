import { useEffect, useState } from "react";
import Styles from "./FunctionalCounter.css";

const FunctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCounter] = useState(0);

  const changeHandler = (event) => {
    const newInput = event.target.value;
    setName(newInput);
  };

  const onChange = () => {
    setCounter(count + 1);
  };

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("updating");
  }, [count]);

  return (
    <div>
      <div className="counter">
        <p className={Styles.p}>My name is : {name}</p>
        <input type="text" id="firstName" onChange={changeHandler} />
        <p className={Styles.p1}>you're counter is : {count}</p>
        <button onClick={onChange}>Couter</button>
      </div>
    </div>
  );
};

export default FunctionalCounter;
