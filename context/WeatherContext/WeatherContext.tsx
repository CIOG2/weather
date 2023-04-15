import { createContext } from 'react';

interface ContextProps {
    mode: 'dark' | 'light';
    setMode: (mode: 'dark' | 'light') => void;
}

const WeatherContext = createContext({} as ContextProps);

export { WeatherContext };