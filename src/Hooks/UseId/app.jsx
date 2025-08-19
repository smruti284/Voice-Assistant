import React, { useId } from 'react';

const App = () => {
    const id = useId();
    const id2 = useId();
  return (
    <div id={id}>
        <h1 id={id2}Hey></h1>
    </div>
  );
};

export default App;