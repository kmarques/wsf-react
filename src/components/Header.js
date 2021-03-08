import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
}
