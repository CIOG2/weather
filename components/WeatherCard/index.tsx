import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '@context/WeatherContext';
import Styles from '@components/WeatherCard/styles.module.scss';
import Image from 'next/image';

const WeatherCard = () => {
    const { weatherCity, mode } = useContext(WeatherContext);
    const [date, setDate] = useState<string>(``);

    const location = `${weatherCity?.name}, ${weatherCity?.sys?.country}`;
    const temp =  Math.ceil(weatherCity?.main?.temp);
    const img = weatherCity?.weather?.[0]?.icon;
    const state = weatherCity?.weather?.[0]?.main;
    
    useEffect(() => {
        const options:any = {weekday: `long`, month: `long`, day: `numeric`};
        const formatter = new Intl.DateTimeFormat(`en-US`, options);
        const targetTimeInMs = (weatherCity?.dt + weatherCity?.timezone) * 1000;
        const targetTime = new Date(targetTimeInMs);
        setDate(formatter.format(targetTime));
    }, [weatherCity]);


    return (
        <article
            className={`${Styles[`article`]} ${Styles[`article--${mode}`]}`}
        >
            <main className={`${Styles[`article__main`]} ${Styles[`article__main--${mode}`]}`}>
                <h4 className={`${Styles[`article__main--title`]} ${Styles[`article__main--title-${mode}`]}`}>
                    Now
                </h4>
                <div className={Styles[`article__main--container`]}>
                    <h3 className={`${Styles[`container__title`]} ${ Styles[`container__title--${mode}`]}`}>
                        {temp}
                        <span className={`${Styles[`celcius`]} ${Styles[`celcius--${mode}`]}`}
                        >°c</span>
                    </h3>
                    <picture className={`${Styles[`container__picture`]} ${Styles[`container__picture--${mode}`]}`}>
                        <Image 
                            src={`/images/weather_icons/${img}.png`} 
                            alt={state}
                            width={70}
                            height={70}
                        />
                    </picture>
                </div>
                <p className={`${Styles[`location`]} ${Styles[`location--${mode}`]}`}>
                    {state}
                </p>
                <div className={`${Styles[`line`]} ${Styles[`line--${mode}`]}`}></div>
            </main>
            <footer>
                <div className={Styles[`footer__container`]}>
                    <Image
                        src={`/svg/date-${mode}.svg`}
                        alt={`location`}
                        width={15}
                        height={15}
                    />
                    <p className={`${Styles[`footer__container--description`]} ${Styles[`footer__container--description-${mode}`]}`}>
                        {date}
                    </p>
                </div>
                <div className={Styles[`footer__container`]}>
                    <Image
                        src={`/svg/location-${mode}.svg`}
                        alt={`location`}
                        width={15}
                        height={15}
                    />
                    <p className={`${Styles[`footer__container--description`]} ${Styles[`footer__container--description-${mode}`]}`}>
                        {location}
                    </p>
                </div>
            </footer>
        </article>
    )
}

export { WeatherCard };