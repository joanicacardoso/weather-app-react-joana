import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import img from "./img/01d.svg";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "./img/01d.svg",
      date: "Monday, August 24",
      time: "18:00",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className=" row justify-content-between no-gutters">
          <div className="col-9">
            <form className="form-inline">
              <div classname="form-group">
                <input
                  type="text"
                  className="form-control form-control-sm input-sm"
                  placeholder="Enter a city"
                  autoComplete="off"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-outline-light btn-sm imput-group-prepend"
                />
              </div>
            </form>
          </div>
          <div className="Units col-3">
            <a href="/">ºC</a> | <a href="/">ºF</a>
          </div>
        </div>
        <div className="row no-gutter">
          <div className="col-10">
            <p>
              Last updated: <br />
              {weatherData.date} <br />
              {weatherData.time}
            </p>
          </div>
          <div className="col-2">
            <a href="/">O</a>
          </div>
        </div>
        <div className="Current">
          <img
            src={weatherData.icon}
            alt="Sunny"
            height="120px"
            width="120px"
          />
          <h1>{Math.round(weatherData.temperature)}º</h1>
          <h1>{weatherData.city}</h1>
          <p className="text-capitalize">{weatherData.description}</p>
        </div>
        <div className="Conditions">
          <p>
            Humidity: {weatherData.humidity}% <br />
            Wind: {weatherData.wind}km/h
          </p>
        </div>
        <div className="Forecast">
          <div className="row justify-content-between no-gutters">
            <div className="col-2">
              <p>10:00</p>
              <img src={img} alt="Sunny" height="30px" width="30px" />
              <p>
                <strong>25</strong> / 12
              </p>
            </div>
            <div className="col-2">
              <p>10:00</p>
              <img src={img} alt="Sunny" height="30px" width="30px" />
              <p>
                <strong>25</strong> / 12
              </p>
            </div>
            <div className="col-2">
              <p>10:00</p>
              <img src={img} alt="Sunny" height="30px" width="30px" />
              <p>
                <strong>25</strong> / 12
              </p>
            </div>
            <div className="col-2">
              <p>10:00</p>
              <img src={img} alt="Sunny" height="30px" width="30px" />
              <p>
                <strong>25</strong> / 12
              </p>
            </div>
            <div className="col-2">
              <p>10:00</p>
              <img src={img} alt="Sunny" height="30px" width="30px" />
              <p>
                <strong>25</strong> / 12
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "48f466c2eeef74f8d4b3c29e67806457";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
