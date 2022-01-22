import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttons = [
    <Button size="large" onClick={() => setGood((prev) => prev + 1)} key="one">
      Good
    </Button>,
    <Button
      size="large"
      onClick={() => setNeutral((prev) => prev + 1)}
      key="two"
    >
      Neutral
    </Button>,
    <Button size="large" onClick={() => setBad((prev) => prev + 1)} key="three">
      Bad
    </Button>,
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Give Feedback</h1>
        <ButtonGroup
          orientation="horizontal"
          aria-label="vertical contained button group"
        >
          {buttons}
          </ButtonGroup>
        <p>Good : {good ? good : ""} </p>
        <p>Neutral : {neutral ? neutral : ""}</p>
        <p>Bad : {bad ? bad : ""}</p>
        <p>Total Feedback : {bad + good + neutral}</p>
        <p>Average : {(bad + good )/3}</p>
        <p>Positive : {Math.floor(( good )/(bad + good + neutral)*100) === NaN ? " " : Math.floor(( good )/(bad + good + neutral)*100) }%</p>
      </header>
    </div>
  );
};

export default App;
