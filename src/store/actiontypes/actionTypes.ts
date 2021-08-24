export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export interface WeatherData  {
 country : string ;
 main : string;
 description : string;
 icon : string;
}