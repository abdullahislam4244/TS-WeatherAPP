import {WeatherData,GET_WEATHER_DATA} from '../actiontypes/actionTypes';
interface WeatherState {
    data : WeatherData | {};
    loading : boolean;
    errormsg : string;
}
const initialState : WeatherState = {
    data : {},
    loading : false,
    errormsg : ''
}
export const weatherReducer = (state = initialState,action:any) : WeatherState => {
 
    switch(action.type) {
        case GET_WEATHER_DATA : 
        return {
            ...state,
            data : action.payload,
            loading:false,
            errormsg : ''
        }
        default: 
        return state;
    }
}