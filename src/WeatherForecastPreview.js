import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}°C`;
    }

    return (
        <div className="WeatherForecastPreview col">
            <p className="future_times">{hours()}</p>
            <WeatherIcon color="black" code={props.data.weather[0].icon} />
            <p className="future_temps">{temperature()}</p>
        </div>
    );
}
