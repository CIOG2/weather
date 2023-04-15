import { ReactNode, useEffect, useState } from "react";
import { WeatherContext } from "./";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { City } from "@interfaces/index";

interface WeatherProviderProps {
    children: ReactNode;
}

let validator = true;

const WeatherProvider = ({ children }: WeatherProviderProps) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [mode, setMode] = useLocalStorage('ThemeMode', 'dark');
    const [city, setCity] = useLocalStorage('City', {} as City);
    const [weatherCity, setWeatherCity] = useState();

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
        if (mode && city && weatherCity) {
            setLoading(true);
        }

        if (city && validator) {
            fetchWeatherCity(city);
            validator = false;
        }
    }, [city, mode, weatherCity]);


    return (
        <WeatherContext.Provider 
            value={{
                mode,
                setMode,
                city,
                setCity,
                loading,
                fetchWeatherCity,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider };