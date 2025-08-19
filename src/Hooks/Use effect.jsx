import React,{useEffect, useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count}`;
        console.log("useEffect");

    }, [count]);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default App;