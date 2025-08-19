import React, {useRef} from "react";

const App = () => {
    const inputRef = useRef();

    function handleClick() {
        inputRef.current.focus( );
        console.log(inputRef.current);
    }
  return (
    <div>
        <input ref={inputRef} />
        <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;