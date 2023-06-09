import { createContext } from 'react';
import { CityI, WeatherI, WeatherWeekI, WeatherHoursI } from '@interfaces/index';

interface ContextProps {
    mode: 'dark' | 'light';
    setMode: (mode: 'dark' | 'light') => void;
    city: CityI;
    setCity: (obj: CityI ) => void;
    loading: boolean;
    weatherCity: WeatherI;
    fetchWeatherCity: (obj: CityI) => void;
    weatherWeek: WeatherWeekI[];
    fetchWeatherWeek: (obj: CityI) => void;
    isLoaded: boolean; 
    weatherHour: WeatherHoursI[];
}

const WeatherContext = createContext({} as ContextProps);

export { WeatherContext };