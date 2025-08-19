import React from "react";

const Child = ({data, dark}) => {
  return (
    <div>
        {data}
        <br />
        <button onClick={dark}>Dark</button>
    </div>
  );
};

export default Child;