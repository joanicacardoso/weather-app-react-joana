import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="singapore" />
        <footer>
          <a
            href="https://github.com/joanicacardoso/weather-app-react-joana"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced code
          </a>{" "}
          and icons by Joana Cardoso
        </footer>
      </div>
    </div>
  );
}
