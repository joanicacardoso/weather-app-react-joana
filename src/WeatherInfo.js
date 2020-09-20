import React from "react";
import img from "./img/01d.svg";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row no-gutter">
        <div className="col-10">
          <FormatedDate date={props.data.date} />
        </div>
        <div className="col-2">
          <a href="/">O</a>
        </div>
      </div>
      <div className="Current">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <WeatherTemperature celsius={props.data.temperature} />
        <h1>{props.data.city}</h1>
        <p className="text-capitalize">{props.data.description}</p>
      </div>
      <div className="Conditions">
        <p>
          Humidity: {props.data.humidity}% <br />
          Wind: {props.data.wind}km/h
        </p>
      </div>
      <div className="Forecast">
        <div className="row justify-content-between no-gutters">
          <div className="col-2">
            <p>10:00</p>
            <img
              src={img}
              alt={props.data.description}
              height="30px"
              width="30px"
            />
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
}
