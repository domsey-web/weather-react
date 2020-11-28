import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeekForecast.css";
import "./Forecast.css";

export default function WeekForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);

        console.log(response.data);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row week-forecast">
                    <div class Name="col2">
                        <WeatherForecastPreview data={forecast.list[0]} />
                    </div>
                    <div class Name="col2">
                        <WeatherForecastPreview data={forecast.list[1]} />
                    </div>
                    <div class Name="col2">
                        <WeatherForecastPreview data={forecast.list[2]} />
                    </div>
                    <div class Name="col2">
                        <WeatherForecastPreview data={forecast.list[3]} />
                    </div>
                    <div class Name="col2">
                        <WeatherForecastPreview data={forecast.list[4]} />
                    </div>
                    <div class Name="col2">
                        <WeatherForecastPreview data={forecast.list[5]} />
                    </div>


                </div>
            </div>
        );


    } else {
        let apiKey = "d2b4efd6e0f5423f450f89aaf0181665";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecastResponse);

        return null;
    }


}