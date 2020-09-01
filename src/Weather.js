import React from "react";
import "./Weather.css";
import img from "./img/01d.svg";

export default function Weather() {
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
            Monday, August 24 <br />
            18:05
          </p>
        </div>
        <div className="col-2">
          <a href="/">O</a>
        </div>
      </div>
      <div className="Current">
        <img src={img} alt="Sunny" height="120px" width="120px" />
        <h1>24º</h1>
        <h1>Lisbon</h1>
        <p>Sunny</p>
      </div>
      <div className="Conditions">
        <p>
          Humidity: 20% <br />
          Wind: 20km/h
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
}
