import React from "react";
import "./styles.css";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__header">
        <h1>LearnMern</h1>
        <h5>ReactJs</h5>
      </div>
      <div className="app__body">
        {" "}
        <h3>Build a React JS based Flexbox Navbar</h3>
        <h5>You will learn:</h5>

        <ul>
          <li>React js</li>
          <li>UseEffect Hook</li>
          <li>State Hook</li>
          <li>Resize event listener</li>
          <li>Debounce Mechanism</li>
          <li>Conditionally render styles</li>
          <li>Dark mode</li>
          <li style={{color: "#bb86fc"}}>CodePen Address: https://5ld6o.csb.app/</li>
          
        </ul>
      </div>
    </div>
  );
}
