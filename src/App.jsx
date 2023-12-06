import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
        />
        <Button title="Button 5" component="a" />

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
