import React from "react";
import Count from "./Count";
import "./Styling.css";
//This app is a simple counter. I have followed the videos from scrimba to aid me in making this. This is practice of passing state as props

function App() {
  //Gives function to the counter
  //Stores the state of count
  const [count, setCount] = React.useState(0);
  //Makes the plus button increase the number by 1
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  //Makes the plus-10 button increase the number by 10
  function plus10() {
    setCount((prevCount) => prevCount + 10);
  }

  //Makes the minus button decrease the number by 1
  function minus() {
    setCount((prevCount) => prevCount - 1);
  }
  //Makes the minus-10 button decrease the number by 10
  function minus10() {
    setCount((prevCount) => prevCount - 10);
  }

  return (
    <>
      <button className="plus-10" onClick={plus10}>
        +10
      </button>
      <button className="plus" onClick={add}>
        +
      </button>
      <Count number={count} />
      <button className="minus" onClick={minus}>
        -
      </button>

      <button className="minus-10" onClick={minus10}>
        -10
      </button>
    </>
  );
}

export default App;
