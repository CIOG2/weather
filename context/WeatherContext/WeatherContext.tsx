import { createContext } from 'react';
import { City } from '@interfaces/index';

interface ContextProps {
    mode: 'dark' | 'light';
    setMode: (mode: 'dark' | 'light') => void;
    city: {};
    setCity: (obj: City ) => void;
    loading: boolean;
    weatherCity: any;
    fetchWeatherCity: (obj: City) => void;
    weatherWeek: any;
    fetchWeatherWeek: (obj: City) => void;
}

const WeatherContext = createContext({} as ContextProps);

export { WeatherContext };