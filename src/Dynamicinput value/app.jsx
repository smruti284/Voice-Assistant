import React, {useState} from 'react';

const App = () => {
    const [value, setValue] = useState("");
  return (
    <div>
        <input onChange={(e) => setValue(e.target.value)} />
        <h1>My name is {value} </h1>
    </div>
  );
};

export default App;