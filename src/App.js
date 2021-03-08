import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import List from "./components/List/List";
import { useState } from "react";
import TodoProvider from "./context/todo";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// React.createElement('div', {
//   className:"App"
// }, React.createElement('header', ....))
function App() {
  const buttons = [
    { title: "bonjour", color: "red", img: logo },
    { title: "bonsoir", color: "red", onClick: () => alert("bonsoir") },
    { title: "bonsocdsqfqsir", color: "red" },
    { title: "light", color: "red", onClick: () => setTheme("light") },
    { title: "dark", color: "red" },
  ];
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Body />
          <Footer />
        </BrowserRouter>
      </div>
      <TodoProvider>
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
          <List />
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
        </header>
      </TodoProvider>
    </>
  );
}

export default App;
