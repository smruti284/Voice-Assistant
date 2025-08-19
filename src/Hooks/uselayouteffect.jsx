import React, {useLayoutEffect, useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;