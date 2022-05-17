import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleHover() {
    setMouseOver(true);

    console.log("Hovered over");
  }

  function handleNoHover() {
    setMouseOver(false);

    console.log("Hovered over");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleHover}
        onMouseOut={handleNoHover}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
