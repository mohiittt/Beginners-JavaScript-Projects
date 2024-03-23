const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const feels = document.querySelector(".feels");
const description = document.querySelector(".description");

// Function to get weather data
function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"59c6c280b353f6b1b7d0a53bf05d2eee"}`
  )
    .then((response) => response.json())
    .then((data) => {
      //Icon
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`;

      //Weather
      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

      //Temperature
      let weatherTemp = data.main.temp;
      weatherTemp = weatherTemp - 273;
      const temp = weatherTemp.toFixed(2);
      temperature.innerHTML = `${temp}°C`;

      //Feels Like
      let feelsTemp = data.main.feels_like;
      feelsTemp = feelsTemp - 273;
      const fTemp = feelsTemp.toFixed(2);
      feels.innerHTML = `Feels like : ${fTemp}°C`;

      //Description
      const weatherDesc = data.weather[0].description;
      description.innerHTML = weatherDesc;
    });
}

// Event listener for button click
btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

// Event listener for "Enter" key press on input field
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let city = input.value;
    getWeather(city);
  }
});
