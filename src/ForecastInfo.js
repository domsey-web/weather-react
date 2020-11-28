import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                                <div className="float-left">
                                    <WeatherIcon code={props.data.icon} />
                                </div>

                                <WeatherTemperature celsius={props.data.temperature} />

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}