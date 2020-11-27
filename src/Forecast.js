import React, { useState } from "react";
import FormattedDate from "./FormattedDate"
import axios from "axios";
import "./Forecast.css";
import "./SearchForm.css";


export default function Forecast(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: "http://openweathermap.org/img/wn/04d@2x.png",
            wind: response.data.wind.speed,
            city: response.data.name
        })


    }

    if (weatherData.ready) {
        return (
            <div><form className="mb-3">
                <div className="row">
                    <div className="col-9">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search City"
                            autoComplete="off"
                            autoFocus="on"
                        />
                    </div>
                    <div className="col-3">
                        <button type="submit" value="search" className="btn w-100">
                            <i className="fas fa-search-location"> </i>
                        </button>
                    </div>
                </div>
            </form>
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
                                    <li className="date-time">
                                        <FormattedDate date={weatherData.date} />
                                    </li>
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
            </div>
        );
    } else {

        const apiKey = "d2b4efd6e0f5423f450f89aaf0181665";
        const units = "metric"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse)

        return "Loading...";

    }

}
