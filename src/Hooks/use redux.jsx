import React, { useRedux } from 'react';


const App = () => {
    const initializerArg = 0;
    function reducer(state, action) {
        switch (action) {
            case "increment":
                return state + 1;

                case "decrement":
                    return state - 1;
                    
                    case "mul":
                        return state * 2;
          default:
            return state;              
        }
    }
  return (
    <div>
        <h1>{tate}</h1>
        <button onClick={() => dispatch("increment")}>Add</button>
        <button onClick={() => dispatch("decrement")}>sub</button>
        <button onClick={() => dispatch("mul")}>mul</button>
    </div>
  );
};

export default App