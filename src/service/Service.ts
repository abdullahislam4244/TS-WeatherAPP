export const fetchWeatherDate = (city:string) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
}