import React from "react";

export const CarsCounter = (props) => (
  <div>
    <h2>Сar counter: </h2>
    <button onClick={props.add}>+</button>
    <button onClick={props.remove}>-</button>
    <p>
      Counter: <strong>{props.counter}</strong>
    </p>
  </div>
);
