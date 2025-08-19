import React, {useState} from "react";

const App = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 2)}>+</button>
        </div>
    );
};
export default App;
