import { useContext } from 'react';
import { WeatherContext } from '@context/WeatherContext';
import { Card } from '@components/WeatherDetails/Card';
import Image from 'next/image';
import Styles from '@components/WeatherDetails/styles.module.scss';

const WeatherDetails = () => {
    const { mode, weatherCity, weatherHour } = useContext(WeatherContext);
    const sunrise = new Date(weatherCity?.sys.sunrise * 1000).toLocaleTimeString().split(':', 2).join(':');
    const sunset = new Date(weatherCity?.sys.sunset * 1000).toLocaleTimeString().split(':', 2).join(':');

    return (
        <article className={`${Styles[`article`]} ${Styles[`article--${mode}`]}`}>
            <div className={`${Styles[`article__container`]} ${Styles[`article__container--${mode}`]}`}>
                <h3 className={`${Styles[`title__card`]} ${Styles[`text--${mode}`]}`}>Sunrise & Sunset</h3>
                <section className={`${Styles[`section__card`]} ${Styles[`section__card--${mode}`]}`}>
                    <div className={`${Styles[`section__card--container`]}`}>
                        <Image
                            src= {`/svg/sun-${mode}.svg`}
                            alt= {`Sunrise`} 
                            width={50}
                            height={50}
                        />
                        <div className={`${Styles[`card--container-text`]}`}>
                            <h4 className={`${Styles[`description`]} ${Styles[`text--${mode}`]}`}>
                                Sunrice
                            </h4>
                            <p className={`${Styles[`hour`]} ${Styles[`text--${mode}`]}`}>
                                {sunrise} AM
                            </p>
                        </div>                        
                    </div>
                    <div className={`${Styles[`section__card--container`]}`}>
                        <Image
                            src= {`/svg/moon-${mode}.svg`}
                            alt= {`Sunset`}
                            width={50}
                            height={50}
                        />
                        <div className={`${Styles[`card--container-text`]}`}>
                            <h4 className={`${Styles[`description`]} ${Styles[`text--${mode}`]}`}>
                                Sunset
                            </h4>
                            <p className={`${Styles[`hour`]} ${Styles[`text--${mode}`]}`}>
                                {sunset} PM
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            {weatherHour.map((item, index) => 
                <Card
                    key={index}
                    {...item}
                    mode={mode}
                />
            )}

        </article>
    )
}

export { WeatherDetails }