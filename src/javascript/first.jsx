import React from 'react';

const App = () => {
    function dark() {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    function light() {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
  return (
    <div>
        <button onClick={dark}>Dark</button>
        <button onClick={light}>light</button>
        <p>hlooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>

    </div>
  );
};

export default App;
