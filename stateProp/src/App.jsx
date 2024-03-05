import React from "react";
import Count from "./Count";
//This app is a simple counter. I have followed the videos from scrimba to aid me in making this. This is practice of passing state as props

function App() {
  //Gives function to the counter
  //Stores the state of count
  const [count, setCount] = React.useState(0);
  //Makes the + button usable by increasing the number by 1
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <button className="plus" onClick={add}>
        +
      </button>
      <Count number={count} />
      <button className="minus" onClick={minus}>
        -
      </button>
    </>
  );
}

export default App;
