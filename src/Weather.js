import axios from "axios";


export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in {response.data.name} is ${response.data.main.temp}°C`);
    }
    let apiKey = "d2b4efd6e0f5423f450f89aaf0181665";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return (
        "Hello from Weather")
}