const currentWeather = document.querySelector("#current-weather");
const forecast = document.querySelector("#forecast");

// Replace these with your city coordinates
const latitude = 33.4152;
const longitude = -111.8315;

// Replace with your OpenWeatherMap API key
const apiKey = "YOUR_API_KEY_HERE";

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeatherURL);
        const data = await response.json();

        displayCurrentWeather(data);
    } catch (error) {
        console.log("Weather error:", error);
        currentWeather.innerHTML = "<p>Weather information is currently unavailable.</p>";
    }
}

function displayCurrentWeather(data) {
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    currentWeather.innerHTML = `
        <img src="${iconURL}" alt="${description}">
        <p><strong>${temperature}&deg;F</strong></p>
        <p>${description}</p>
        <p>High: ${Math.round(data.main.temp_max)}&deg;F</p>
        <p>Low: ${Math.round(data.main.temp_min)}&deg;F</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        const data = await response.json();

        displayForecast(data.list);
    } catch (error) {
        console.log("Forecast error:", error);
        forecast.innerHTML = "<p>Forecast information is currently unavailable.</p>";
    }
}

function displayForecast(weatherList) {
    forecast.innerHTML = "";

    const dailyForecast = weatherList.filter(item => item.dt_txt.includes("12:00:00"));

    dailyForecast.slice(0, 3).forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const temp = Math.round(day.main.temp);

        const forecastItem = document.createElement("p");
        forecastItem.innerHTML = `${dayName}: <strong>${temp}&deg;F</strong>`;

        forecast.appendChild(forecastItem);
    });
}

getCurrentWeather();
getForecast();