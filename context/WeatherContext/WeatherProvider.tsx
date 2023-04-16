import { ReactNode, useEffect, useState } from "react";
import { WeatherContext } from "./";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { City } from "@interfaces/index";
import { generateWeek } from "@utils/generateWeek";

interface WeatherProviderProps {
    children: ReactNode;
}

let validator = true;

const WeatherProvider = ({ children }: WeatherProviderProps) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [mode, setMode] = useLocalStorage('ThemeMode', 'dark');
    const [city, setCity] = useLocalStorage('City', {} as City);
    const [weatherCity, setWeatherCity] = useState({});
    const [weatherWeek, setWeatherWeek] = useState<any>([]);

    const fetchWeatherCity = async ({ city, latitud, longitud, autoDetected}: City) => {
        try {
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&lang=sp&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}`
            const response = await fetch(URL);
            const data = await response.json();
            
            if(autoDetected)
                data.name = city;
            
            setWeatherCity(data);    
        } catch (error) {
            console.error('Ha ocurrido un error: ', error);
        }
    };

    const fetchWeatherWeek = async ({ latitud, longitud }: City) => {
        try {
            const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&units=metric&lang=sp&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}`
            const response = await fetch(URL);
            const data = await response.json();
            const week = generateWeek(data);
            setWeatherWeek(week);
        } catch (error) {
            console.error('Ha ocurrido un error: ', error);
        }
    };


    useEffect(() => {
        if (!city.autoDetected && !city.city) {
            fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const obj: City = {
                    city: `${data.city}, ${data.country}`,
                    longitud: data.longitude,
                    latitud: data.latitude,
                    autoDetected: true,
                };
                setCity(obj);
            })
            .catch(error => console.error('Ha ocurrido un error: ', error));
        }
    }, [city, setCity]);

    useEffect(() => {

        if (mode && city && weatherWeek.length > 1 && Object.entries(weatherCity).length !== 0) {
            setTimeout(() => {
                setLoading(true);
            }, 1500);
        }

        if (Object.entries(city).length !== 0 && validator) {
            fetchWeatherWeek(city);
            fetchWeatherCity(city);
            validator = false;
        }
    }, [city, mode, weatherCity, weatherWeek]);


    return (
        <WeatherContext.Provider 
            value={{
                mode,
                setMode,
                city,
                setCity,
                loading,
                weatherCity,
                fetchWeatherCity,
                weatherWeek,
                fetchWeatherWeek,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider };