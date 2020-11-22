import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast() {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
        setWeatherData({
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Monday, 06:04",
            description: response.data.weather[0].description,
            iconUrl: "http://openweathermap.org/img/wn/04d@2x.png",
            wind: response.data.wind.speed,
            city: response.data.name
        })


        setReady(true);
    }

    if (ready) {
        return (
            <div className="row">
                <div className="col-12">
                    <img
                        className="card-img"
                        src="https://i.ibb.co/WWnqSVg/weatherbackground1.png"
                        alt="Card"
                    />
                    <div className="card-img-overlay">
                        <div className="card-body">
                            <h1 className="header-section">
                                <span>{weatherData.city}</span>
                            </h1>
                            <ul className="weather_specifics_class">
                                <li className="date-time">{weatherData.date}</li>
                                <li className="weather_specifics">{weatherData.description}</li>
                            </ul>
                            <div className="clearfix weather-temperature">
                                <img
                                    src={weatherData.iconUrl}
                                    alt={weatherData.description}
                                    className="float-left" />
                                <h2 className="temperature">
                                    <span className="temp">{Math.round(weatherData.temperature)}</span>°
                                    <span className="units">
                                        <sup className="superscript-conversion">
                                            <a href="/" className="active">
                                                C
                                            </a>{" "}
                                            |<a href="/">F</a>
                                        </sup>
                                    </span>
                                </h2>
                            </div>
                            <div className="extra-weather">
                                <ul className="other-weather">
                                    <li>
                                        Humidity: <span>{weatherData.humidity}</span>%
                                    </li>
                                    <li>
                                        Wind: <span>{Math.round(weatherData.wind)}</span> km/h
                                    </li>
                                </ul>
                            </div>
                            <div className="row week-forecast">
                                <div className="col2">
                                    <div className="row"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {

        const apiKey = "d2b4efd6e0f5423f450f89aaf0181665";
        const units = "metric"
        let city = "New York";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse)

        return "Loading...";

    }

}
