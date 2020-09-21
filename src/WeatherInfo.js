import React from "react";
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
        <div className="col-2"></div>
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
    </div>
  );
}
