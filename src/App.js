import logo from "./logo.png";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo img-fluid" alt="logo" />

        <Weather defaultCity="Tehran" />
        <footer>
          This project was coded by Shabnam Ebadi and is{" "}
          <a
            href="https://github.com/shebadi/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and hosted in{" "}
          <a
            href="https://moonlit-concha-4ebb01.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
