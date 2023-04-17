import Styles from '@components/WeekWeatherCard/styles.module.scss';
import { WeatherContext } from '@context/WeatherContext';
import { useContext } from 'react';
import { Day } from '@components/WeekWeatherCard/Day';

const WeekWeatherCard = () => {
    const { mode, weatherWeek } = useContext(WeatherContext);
    
    
    return (
        <>
            <h2 className={`${Styles[`title`]} ${Styles[`title--${mode}`]}`}>5 Days Forescast</h2>
            <article className={`${Styles[`article`]} ${Styles[`article--${mode}`]}`}>
                {weatherWeek.map((day:any, index:number) =>     
                    <Day
                        key={index}
                        day={day.day}
                        dayWeather={day.dayWeather}
                        dayWeatherIcon={day.dayWeatherIcon}
                        tempMin={day.tempMin}
                        tempMax={day.tempMax}
                        mode={mode}
                    />
                )}
            </article>
        </>
    )
}

export { WeekWeatherCard };