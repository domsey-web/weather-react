import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {

        return (
            <h2 className="temperature">
                <span className="temp">{Math.round(props.celsius)}</span>°
                <span className="units">
                    <sup className="superscript-conversion">
                        <a href="/" className="active">C </a> {" "} |
                        <a href="/" onClick={showFahrenheit}>F</a>
                    </sup>
                </span>
            </h2>
        );
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
            <h2 className="temperature">
                <span className="temp">{Math.round(fahrenheit)}</span>°
                <span className="units">
                    <sup className="superscript-conversion">
                        <a href="/" onClick={showCelsius}>C </a> {" "} |
                        <a href="/" className="active" >F</a>
                    </sup>
                </span>
            </h2>
        );
    }
}