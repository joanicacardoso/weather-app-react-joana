import React from "react";

export default function WeatherIcon(props) {
  return <img src={require(`./img/${props.code}.svg`)} alt={props.alt}></img>;
}
