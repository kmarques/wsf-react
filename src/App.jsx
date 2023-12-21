import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layouts/Header";

function App() {
  const [count, setCount] = useState(0);
  /*
    <=>
    const countState = useState(0);
    const count = countState[0];
    const setCount = countState[1];
  */

  const MAX_VOITURES = 10;
  const [voituresCount, setVoituresCount] = useState(9);

  const [alertStyle, setAlertStyle] = useState({
    backgroundColor: "red",
    color: "white",
  });

  function changeAlertStyle() {
    setTimeout(() => {
      if (alertStyle.backgroundColor === "red") {
        setAlertStyle({
          backgroundColor: "yellow",
          color: "red",
        });
      } else {
        setAlertStyle({
          backgroundColor: "red",
          color: "white",
        });
      }
    }, 1000);
  }

  changeAlertStyle();

  return (
    <>
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {voituresCount > MAX_VOITURES && (
        <p style={alertStyle}>/!\ Trop de voitures en stocks</p>
      )}
      <button onClick={() => setVoituresCount(voituresCount + 1)}>
        Add Voiture
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
