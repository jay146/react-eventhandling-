import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("Hello ");
  const [paragraphText, changeText] = useState("HI THIS IS A PARAGRAPH");
  function handleClick() {
    setHeading(" Name submitted");
  }
  const [isMouseOver, setMouseOver] = useState(false);
  function handleClick2() {
    changeText("hi i had modified paragraph using button and using useState");
    setMouseOver(true);
  }

  function handleClick3() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <p>{paragraphText}</p>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
      <button
        type="submit"
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleClick2}
        onMouseOut={handleClick3}
      >
        change text
      </button>
    </div>
  );
}

export default App;
