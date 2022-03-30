import { useContext, useEffect, useRef, useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const previousValue = useRef();
  const previousNumber = useRef();

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  const changenumberHandler = () => {
    setNumber(Math.ceil(Math.random() * 100));
  };

  console.log("re-render", name);
  console.log("prev-value", previousValue.current);

  useEffect(() => {
    previousValue.current = name;
    previousNumber.current = number;
    console.log("useEffect", previousValue.current);
  }, [name, number]);

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={name} />
      <p>
        My name is {name} and it's used to be {previousValue.current}
      </p>

      <button onClick={changenumberHandler}>{number}</button>

      <p>number is : {number}</p>
      <p>prev-number : {previousNumber.current}</p>
    </div>
  );
};

export default Input;
