import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefaut();
    //search for a city
    search();
  }

  function handleCityChange(event) {
    //update city
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "7a8048c0d2acbeeb84d126f5c346c59f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className=" row justify-content-between no-gutters">
          <div className="col-9">
            <form onSubmit={handleSubmit} className="form-inline">
              <div className="form-group">
                <input
                  type="search"
                  className="form-control form-control-sm input-sm"
                  placeholder="Enter a city"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-outline-light btn-sm imput-group-prepend"
                />
              </div>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
