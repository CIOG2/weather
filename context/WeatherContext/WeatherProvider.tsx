import React, { ReactNode } from "react";
import { WeatherContext } from "./";

interface WeatherProviderProps {
    children: ReactNode;
}

const WeatherProvider = ({ children }: WeatherProviderProps) => {
    const [mode, setMode] = React.useState<"dark" | "light">("dark");

    return (
        <WeatherContext.Provider 
            value={{
                mode,
                setMode,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider };