import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="Temp">{Math.round(props.celsius)}</span>
        <span className="Units">
          ºC |{" "}
          <a href="/" onClick={showFar}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="Temp">{Math.round(farenheit)}</span>
        <span className="Units">
          <a href="/" onClick={showCel}>
            ºC{" "}
          </a>
          | ºF
        </span>
      </div>
    );
  }
}
