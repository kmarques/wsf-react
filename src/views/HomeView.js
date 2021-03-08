import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import logo from "../logo.svg";

export default function HomeView() {
  const buttons = [
    { title: "bonjour", color: "red", img: logo },
    { title: "bonsoir", color: "red", onClick: () => alert("bonsoir") },
    { title: "bonsocdsqfqsir", color: "red" },
    { title: "light", color: "red", onClick: () => setTheme("light") },
    { title: "dark", color: "red" },
  ];
  const [theme, setTheme] = useState("light");

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {theme}
      {buttons.map((button) => (
        <Button
          title={button.title}
          color={button.color}
          img={button.img}
          onClick={button.onClick}
        />
      ))}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Link to="/list">Go to List</Link>
    </header>
  );
}
