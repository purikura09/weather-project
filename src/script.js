let now = new Date();
let h2 = document.querySelector("#currentDate");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let month = now.getMonth();

h2.innerHTML = `${day} ${hours}: ${minutes}`;

function weatherCity(response) {
  console.log(response.data.name);
  document.querySelector("#city-title").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "ee1b96c1f77d3aae1b3b86327285b0f8";
  let city = document.querySelector("#search-value").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(weatherCity);
  //let searchValue = document.querySelector("#search-value");
  //let searchCity = document.querySelector("#city-title");
  //searchCity.innerHTML = `${searchValue.value}`;
}

let searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener("click", search);

function farenheitConversion(event) {
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = `46 F`;
}

let farenheit = document.querySelector("#farenheit-link");
farenheit.addEventListener("click", farenheitConversion);

function celsiusConversion(event) {
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = `8° C`;
}
let degrees = document.querySelector("#degrees-link");
degrees.addEventListener("click", celsiusConversion);
