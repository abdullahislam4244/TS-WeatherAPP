import { combineReducers } from "redux";
import { weatherReducer } from "./reducers/weatherReducer";

export const rootReducer = combineReducers({
    weatherReducer
})

export type RootState = ReturnType<typeof rootReducer>