import Styles from '@components/ChangeTheme/Styles.module.scss';
import { WeatherContext } from '@context/WeatherContext';
import { useContext } from 'react';

const ChangeTheme = () => {
    const { mode, setMode } = useContext(WeatherContext);

    const changeState = () => {
        (mode === `dark`) 
            ? setMode(`light`)
            : setMode(`dark`);
    }

    return (
        <div className={Styles[`toggleWrapper`]} onClick={changeState}>
            <div className={`${Styles[`dn`]} ${(mode === `dark`) ? Styles[`checked`] : ``}`} />
            <label className={`${Styles[`toggle`]} ${Styles[`toggle--${mode}`]}`}>
                <span className={Styles[`toggle__handler`]}>
                    <span className={`${Styles[`crater`]} ${Styles[`crater--1`]}`}></span>
                    <span className={`${Styles[`crater`]} ${Styles[`crater--2`]}`}></span>
                    <span className={`${Styles[`crater`]} ${Styles[`crater--3`]}`}></span>
                </span>
                <span className={`${Styles[`star`]} ${Styles[`star--1`]}`}></span>
                <span className={`${Styles[`star`]} ${Styles[`star--2`]}`}></span>
                <span className={`${Styles[`star`]} ${Styles[`star--3`]}`}></span>
                <span className={`${Styles[`star`]} ${Styles[`star--4`]}`}></span>
                <span className={`${Styles[`star`]} ${Styles[`star--5`]}`}></span>
                <span className={`${Styles[`star`]} ${Styles[`star--6`]}`}></span>
            </label>
        </div>
    )
}

export { ChangeTheme };