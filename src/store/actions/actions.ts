import { Dispatch } from "redux";
import { fetchWeatherDate } from "../../service/Service";
import { WeatherData , GET_WEATHER_DATA } from "../actiontypes/actionTypes";
export const getWeatherData = (city:string)  => (dispatch:Dispatch) => {
 fetchWeatherDate(city)
 .then(response=> response.json())
 .then(response => { 
     const {sys : {country}, weather : [{main,description,icon}]} = response;
     const data : WeatherData = {
         country : country,
         main : main,
         description : description,
         icon : icon
     }
     dispatch({type : GET_WEATHER_DATA , payload : data });
 })
 .catch(error=>console.log(error.message));
}