const apiKey = "e86cedad4305aec5824d2a5f6cdd3349";



const lat = 6.1319;
const lon = 1.2228;

const currentWeatherURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// Current Weather
async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeatherURL);
        const data = await response.json();

        document.getElementById("temp").textContent =
            `${Math.round(data.main.temp)}°C`;

        document.getElementById("description").textContent =
            data.weather[0].description;

        document.getElementById("high").textContent =
            `${Math.round(data.main.temp_max)}°C`;

        document.getElementById("low").textContent =
            `${Math.round(data.main.temp_min)}°C`;

        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;

        document.getElementById("wind").textContent =
            `${data.wind.speed} m/s`;

        const icon = document.getElementById("weather-icon");

        icon.src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        icon.alt = data.weather[0].description;

    } catch (error) {
        console.error(error);
    }
}

// Forecast
async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        const data = await response.json();

        const forecast = document.getElementById("forecast");

        forecast.innerHTML = "";

        const days = data.list.filter((item, index) => index % 8 === 0);

        days.slice(0, 3).forEach(day => {

            const date = new Date(day.dt_txt);

            const p = document.createElement("p");

            p.innerHTML =
                `${date.toLocaleDateString("en-US", {
                    weekday: "long"
                })}: <strong>${Math.round(day.main.temp)}°C</strong>`;

            forecast.appendChild(p);
        });

    } catch (error) {
        console.error(error);
    }
}

getCurrentWeather();
getForecast();