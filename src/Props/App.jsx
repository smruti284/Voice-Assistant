import React from "react";
import Child from "./Props/Child";

const App = () => {
  const name = "I am React js ";

  function Dark() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  return (
    <div>
      <Child data={name} dark={Dark}></Child>
    </div>
  );
};

export default App;