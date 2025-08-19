import React, { useState } from "react";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={open}>Open</button>
            {isOpen && (
                <div>
                    <h1>Yes Bro</h1>
                    <button onClick={close}>Close</button>
                </div>
            )}
        </div>
    );
};

export default App;
