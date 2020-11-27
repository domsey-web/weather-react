import React from "react";
import FormattedDate from "./FormattedDate"

export default function ForecastInfo(props) {

    return (
        <div className="WeatherInfo">
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
                                <span>{props.data.city}</span>
                            </h1>
                            <ul className="weather_specifics_class">
                                <li className="date-time">
                                    <FormattedDate date={props.data.date} />
                                </li>
                                <li className="weather_specifics">{props.data.description}</li>
                            </ul>
                            <div className="clearfix weather-temperature">
                                <img
                                    src={props.data.iconUrl}
                                    alt={props.data.description}
                                    className="float-left" />
                                <h2 className="temperature">
                                    <span className="temp">{Math.round(props.data.temperature)}</span>°
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
                                        Humidity: <span>{props.data.humidity}</span>%
                                    </li>
                                    <li>
                                        Wind: <span>{Math.round(props.data.wind)}</span> km/h
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
}