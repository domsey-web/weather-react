import React, { useState } from "react";
import ForecastInfo from "./ForecastInfo"
import axios from "axios";
import "./Forecast.css";
import "./SearchForm.css";


export default function Forecast(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        })


    }

    function search() {
        const apiKey = "d2b4efd6e0f5423f450f89aaf0181665";
        const units = "metric"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }


    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

    function handleCityChange(event) {
        setCity(event.target.value);

    }

    if (weatherData.ready) {
        return (
            <div>
                <form className="mb-3" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search City"
                                autoComplete="off"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <button type="submit" value="search" className="btn w-100">
                                <i className="fas fa-search-location"> </i>
                            </button>
                        </div>
                    </div>
                </form>
                <ForecastInfo data={weatherData} />
            </div>
        );
    } else {

        search();
        return "Loading...";

    }

}
