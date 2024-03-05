import React from "react";

//Counter display exported to App.jsx. This is not really necesarry as it is so small but it is to practice import export and using props
export default function Count(props) {
  return (
    <div className="counter">
      <h1>{props.number}</h1>
    </div>
  );
}
