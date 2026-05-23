const apiKey = "YOUR_API_KEY";
const lat = 33.3528;
const lon = -111.7890;

const url = `https://radar.weather.gov/`;

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  document.querySelector("#current-temp").textContent = `${data.list[0].main.temp}°F`;
  document.querySelector("#weather-desc").textContent = data.list[0].weather[0].description;

  const forecast = document.querySelector("#forecast");
  forecast.innerHTML = "";

  data.list
    .filter(item => item.dt_txt.includes("12:00:00"))
    .slice(0, 3)
    .forEach(item => {
      const p = document.createElement("p");
      p.textContent = `${item.dt_txt.split(" ")[0]}: ${item.main.temp}°F`;
      forecast.appendChild(p);
    });
}

getWeather();