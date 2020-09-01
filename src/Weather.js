import React from "react";
import "./Weather.css";
import img from "./img/01d.svg";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-7">
          <form className="form-inline">
            <div classname="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
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
        <div className="col-4">
          <a href="/">ºC</a> | <a href="/">ºF</a>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <p>
            Last updated: <br />
            Monday, August 24 <br />
            18:05
          </p>
        </div>
        <div className="col-4">
          <a href="/">O</a>
        </div>
      </div>
      <img src={img} alt="Sunny" height="120px" width="200px" />
      <h1>24º</h1>
      <h1>Lisbon</h1>
      <p>Sunny</p>
      <div className="ExtraData">
        <p>
          Humidity: 20% <br />
          Wind: 20km/h
        </p>
      </div>
      <div className="Forecast">
        <div className="row">
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
}
