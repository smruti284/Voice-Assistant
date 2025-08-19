import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <h1>
          Signup Here 
        </h1>
        <input type="email" placeholder="Enter your email" />
        <br/>
        <input type="password" placeholder="Enter your password" />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;