import React, { useState, useEffect } from "react";
const FunctionalShow = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const tick = () => {
    let timer = count;
    timer--;
    setCount(timer);
  };

  return (
    <div>
      <div>FunctionalInterval</div>
      {count}
    </div>
  );
};

export default FunctionalShow;
