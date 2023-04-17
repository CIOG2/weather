import { FC } from 'react';
import { WeatherHoursI } from '@interfaces/index';
import Image from 'next/image';
import Styles from '@components/WeatherDetails/Card/styles.module.scss';

interface Props extends WeatherHoursI{
    mode: string;
}

const Card: FC<Props> = ({ hour, image, temp, mode}) => {

    return (
        <div className={`${Styles[`card`]} ${Styles[`card--${mode}`]}`}>
            <h4 className={`${Styles[`hour`]} ${Styles[`text--${mode}`]}`}>
                {hour}
            </h4>
            <Image
                src= {`/images/weather_icons/${image}.png`}
                alt= {`${image}`}
                width={50}
                height={50}
            />
            <h4 className={`${Styles[`temperature`]} ${Styles[`text--${mode}`]}`}>
                {temp}<span className={`${Styles[`celcious`]} ${Styles[`text--${mode}`]}`}>°</span>
            </h4>
        </div>
    )
}

export { Card };