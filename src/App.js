import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

// React.createElement('div', {
//   className:"App"
// }, React.createElement('header', ....))
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Body />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
