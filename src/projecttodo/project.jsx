import React, { useState } from 'react';

const App = () => {
    const [data, setData]= useState([]);
    const [value, setValue]= useState("");

    function handleAdd() {
        setData([...data, value]);
        setValue("");
    }

    function handleRemove(index) {
        setData(data.filter((item,i) => i !== index));
    }
  return (
    <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <table
          border="1"
          style={{marginTop: ""}}
        {data.map((item, index) => {
            return (
                <div key={index}>
                    <span>{index}</span>
                    <span>{item}</span>
                    <span>
                        <button>Delete</button>
                    </span>
                </div>    
            );
        })}
    </div>
  );
};

export default App;