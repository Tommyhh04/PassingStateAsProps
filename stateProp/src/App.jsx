import React from "react";

//This app is a simple counter. I have followed the videos from scrimba to aid me in making this. This is practice of passing state as props

function App() {
  //Gives function to the counter

  const [count, setCount] = React.useState(0);

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
