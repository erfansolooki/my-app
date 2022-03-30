import React, { useState } from "react";
import WithCounter from "../HOC/withCount";

const Click = ({ count, incrementCount, name }) => {
  console.log(name);
  return (
    <div>
      {count}
      <h2 onClick={incrementCount}>Click to add</h2>
    </div>
  );
};

export default WithCounter(Click, 10);
