import React, { useState } from "react";
import WithCounter from "../HOC/withCount";

const Hover = ({ count, incrementCount, name }) => {
  console.log(name);
  return (
    <div>
      {count}
      <h2 onMouseOver={incrementCount}>Hover to add</h2>
    </div>
  );
};

export default WithCounter(Hover, 5);
