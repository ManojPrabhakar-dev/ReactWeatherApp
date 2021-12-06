// import icons from "./iconsList.json";

// export default function Icons(iconId = 200) {
//   const prefix = "wi wi-";
//   let icon = icons[iconId] ? icons[iconId].icon : "storm";

//   // If we are not in the ranges mentioned above, add a day/night prefix.
//   if (!(iconId > 699 && iconId < 800) && !(iconId > 899 && iconId < 1000)) {
//     icon = "day-" + icon;
//   }

//   return prefix + icon;
// }

export function getCurrentIconURL(forecastData) {
  if (forecastData.current) {
    return `https://openweathermap.org/img/wn/${forecastData.current.weather[0].icon}@2x.png`;
  } else {
    return "";
  }
}

export function getForecastIconURL(forecastData) {
  if (forecastData) {
    return `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`;
  } else {
    return "";
  }
}
