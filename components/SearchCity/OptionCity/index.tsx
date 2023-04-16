import { useContext } from 'react';
import Styles from '@components/SearchCity/OptionCity/styles.module.scss';
import { WeatherContext } from '@context/WeatherContext';

const OptionCity = ({ mainText, description }: any) => {
    const { mode } = useContext(WeatherContext);

    return (
        <div className={Styles[`center`]}>
            <picture className={Styles[`container__img`]}>
                <img 
                    className={Styles[`image`]}
                    src={`/svg/location-${mode}.svg`}
                    alt="location icon"
                />
            </picture>
            <div className={Styles[`container__text`]}>
                <h4 
                    className={`${Styles[`title`]} ${Styles[`title--${mode}`]}`}
                > 
                    {mainText} 
                </h4>
                <span 
                    className={`${Styles[`description`]} ${Styles[`description--${mode}`]}`}
                > 
                    {description} 
                </span>
            </div>
        </div>
    )
}

export { OptionCity }