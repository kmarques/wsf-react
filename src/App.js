import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// React.createElement('div', {
//   className:"App"
// }, React.createElement('header', ....))
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
