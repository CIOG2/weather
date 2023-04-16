import Styles from '@components/WeekWeatherCard/Day/styles.module.scss';
import Image from 'next/image';
import { FC } from 'react';

interface DayProps {
    day: string;
    dayWeather: string;
    dayWeatherIcon: string;
    tempMin: number;
    tempMax: number;
    mode: string;
}

const Day: FC<DayProps> = ({day, dayWeather, dayWeatherIcon ,tempMin, tempMax, mode}) => {
 
    return (
        <div className={Styles[`container`]}>
            <picture className={`${Styles[`container__picture`]} ${Styles[`container__picture--${mode}`]}`}>
                <Image
                    src={`/images/weather_icons/${dayWeatherIcon}.png`}
                    alt={dayWeather}
                    width={50}
                    height={50}
                />
            </picture>
            <h3 className={`${Styles[`description`]} ${Styles[`description--${mode}`]}`}>
                {day}
            </h3>
            <h3 className={`${Styles[`description`]} ${Styles[`description--${mode}`]}`}>
                {tempMin}°/{tempMax}°
            </h3>

        </div>    
    )
}

export { Day };