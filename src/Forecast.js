import React from "react";
import "./Forecast.css";

export default function Forecast() {
    let weatherData = {
        city: "Bristol",
        date: "Saturday, 06:04",
        description: "mostly cloudy",
        temperature: 11,
        humidity: 61,
        wind: 3,
        imageUrl: "http://openweathermap.org/img/wn/04d@2x.png"
    };
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
                                src={weatherData.imageUrl}
                                alt={weatherData.description}
                                className="float-left"
                            />
                            <h2 className="temperature">
                                <span className="temp">{weatherData.temperature}</span>°
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
                                    Wind: <span>{weatherData.wind}</span> km/h
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
}
