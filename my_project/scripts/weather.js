/*=====================================
        WEATHER API
=====================================*/

const apiKey = "e86cedad4305aec5824d2a5f6cdd3349";

const weatherURL =
`https://api.openweathermap.org/data/2.5/weather?lat=6.1319&lon=1.2228&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {

        const response = await fetch(weatherURL);

        if (!response.ok) {
            throw new Error("Unable to load weather data.");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {

        console.error(error);

    }

}

function displayWeather(data) {

    document.querySelector("#temperature").textContent =
        `${Math.round(data.main.temp)} °C`;

    document.querySelector("#condition").textContent =
        data.weather[0].description;

    document.querySelector("#humidity").textContent =
        `${data.main.humidity}%`;

    document.querySelector("#wind").textContent =
        `${data.wind.speed} m/s`;

    document.querySelector("#feelsLike").textContent =
        `${Math.round(data.main.feels_like)} °C`;

    const icon = document.querySelector("#weatherIcon");

    icon.src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    icon.alt = data.weather[0].description;

}

getWeather();