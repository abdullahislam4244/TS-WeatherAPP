import React,{useState , useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './Searchbar.scss';
import { getWeatherData } from '../../store/actions/actions';
import { RootState } from '../../store/combineReducer';
const Searchbar = () => {
    const {data:weatherData} = useSelector((state : RootState)=> state.weatherReducer);

    console.log(weatherData);
    const countryInputRef = useRef<HTMLInputElement>(null);
    const [country,setCountry] = useState<string>('');
    const dispatch = useDispatch()

    const CountryChangeHandler = ()=> {
        if(countryInputRef.current){
         setCountry(countryInputRef.current.value);
        }
    }
    const SubmitFormHandler = (e : React.MouseEvent<HTMLButtonElement>) => {
   e.preventDefault();
   dispatch(getWeatherData(country));
    }
    return (
        <div className="WeatherSearch">
        <form className="WeatherSearch__Form">
         <input value={country} onChange={CountryChangeHandler} ref={countryInputRef} className="searchbar" type="text" placeholder="Enter Country Name"></input>
         <button className="btn btn-search" type="submit" onClick={SubmitFormHandler}>Search</button>
        </form>
        </div>
    )
}

export default Searchbar
