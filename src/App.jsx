import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button-pro";
import ProgressBar from "./components/ProgressBar2";
import InstaFlux from "./Insta/InstaFLux";

const images = [
  { id: 1, src: "https://picsum.photos/200/300?random=1", name: "Image 1" },
  { id: 2, src: "https://picsum.photos/200/300?random=2", name: "Image 2" },
  { id: 3, src: "https://picsum.photos/200/300?random=3", name: "Image 3" },
  { id: 4, src: "https://picsum.photos/200/300?random=4", name: "Image 4" },
];

function App() {
  const [count, setCount] = useState(0);
  /*
    <=>
    const countState = useState(0);
    const count = countState[0];
    const setCount = countState[1];
  */
  const [displayLogo, setDisplayLogo] = useState(true);

  const MAX_VOITURES = 10;
  const [voituresCount, setVoituresCount] = useState(9);
  const [current, setCurrent] = useState(0);
  const [increment, setIncrement] = useState(5);

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

  //changeAlertStyle();

  return (
    <>
      {displayLogo && (
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      )}
      {!displayLogo && <p>Logos cachés</p>}
      <h1>Vite + React</h1>
      {voituresCount > MAX_VOITURES && (
        <p style={alertStyle}>/!\ Trop de voitures en stocks</p>
      )}
      <button onClick={() => setVoituresCount(voituresCount + 1)}>
        Add Voiture
      </button>
      <div className="card">
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

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
        <button onClick={() => setCurrent(current + increment)}>
          Add Step
        </button>
        <button onClick={() => setCurrent(current - increment)}>
          Remove Step
        </button>
        <button onClick={() => setCurrent(0)}>Reset</button>
        <div>
          {images.map((item) => (
            <img key={item.id} src={item.src} alt={item.name} />
          ))}
        </div>
      </div>
      <InstaFlux />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
