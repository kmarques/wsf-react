import React, { useState } from "react";
import Button from "../components/Button-pro";
import viteLogo from "/vite.svg";
import ProgressBar from "../components/ProgressBar2";
import Header from "../layouts/Header";

export default function Components() {
  const [current, setCurrent] = useState(0);
  const [increment, setIncrement] = useState(5);
  const [displayLogo, setDisplayLogo] = useState(true);

  return (
    <div>
      {displayLogo && (
        <img
          src="https://picsum.photos/200/300"
          className="logo"
          alt="Vite logo"
        />
      )}
      {!displayLogo && <p>Logos cachés</p>}
      <Button title="Button 1" onClick={() => console.log("Button 1")} />
      <Button
        variant="squared"
        title="Button 2"
        onClick={() => alert("Button 2")}
        customStyle={{
          backgroundColor: "green",
        }}
      />
      <Button
        variant="round"
        title="Button 3"
        onClick={() => prompt("Type a text")}
      />
      <Button
        variant="text"
        title="Button 4"
        onClick={() => confirm("Are you sure ?")}
      >
        Button 4.children
      </Button>
      <Button title="Button 5" component="a" />
      <Button
        component="a"
        href="#"
        onClick={function () {
          setDisplayLogo(!displayLogo);
        }}
      >
        Toggle Logo
      </Button>
      <Button
        component="a"
        href="https://google.fr"
        rel="noreferrer"
        target="_blank"
        onClick={function () {
          toto = toto + 1;
        }}
      >
        Go to google
        <img src={viteLogo} alt="Vite logo" />
      </Button>
      <div
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Current step : {current}
        <div style={{ width: 200, height: 50 }}>
          <ProgressBar
            current={current}
            maxCount={30}
            range={{
              20: "green",
              60: "yellow",
              100: "red",
              Infinity: "black",
            }}
          />
        </div>
        <div style={{ height: 200, width: 50 }}>
          <ProgressBar
            variant="vertical"
            current={current}
            maxCount={30}
            range={{
              20: "green",
              60: "yellow",
              100: "red",
              Infinity: "black",
            }}
          />
        </div>
      </div>
      <select
        defaultValue={increment}
        onChange={(e) => setIncrement(parseInt(e.target.value))}
      >
        <option value="1">+1</option>
        <option value="5">+5</option>
        <option value="10">+10</option>
      </select>
      <button onClick={() => setCurrent(current + increment)}>Add Step</button>
      <button onClick={() => setCurrent(current - increment)}>
        Remove Step
      </button>
      <button onClick={() => setCurrent(0)}>Reset</button>
    </div>
  );
}
