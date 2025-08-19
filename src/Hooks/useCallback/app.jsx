import React, {useState, useCallback} from "react";
import child from "./Child";

const App = () => {
    const [add, setAdd] = useState(0);

    function Add() {
        setAdd(add + 1);
    }
    let learning = useCallback(() => {}, []);
  return (
    <div>
      <h1>{add}</h1>
      <button onClick={Add}>+</button>
      <Child learning={learning} />
    </div>
  );
};

export default App;
