import Styles from '@components/ChangeTheme/styles.module.scss';
import { WeatherContext } from '@context/WeatherContext';
import { useContext } from 'react';

const ChangeTheme = () => {
    const { mode, setMode } = useContext(WeatherContext);

    const changeState = () => {
        (mode === 'dark') 
            ? setMode('light')
            : setMode('dark');
    }

    return (
        <label className={Styles['switch']}>
            <input className={Styles['chk_85']} 
                type="checkbox"
                onChange={changeState}
            />
            <span className={Styles['slider']}>
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" className={Styles['torch']}>
                    <path d="M 63.85,54.65 Q 62.77,54.13 61.88,53.31 Q 54.13,46.12 46.31,37.69 Q 43.88,35.06 44.29,31.53 Q 44.51,29.56 46.54,25.87 Q 56.15,8.39 59.06,3.56 Q 60.59,1.03 63.83,2.41 Q 67.73,4.07 71.11,6.55 Q 72.85,7.82 77.51,11.86 Q 89.11,21.92 96.94,34.06 Q 100.09,38.95 95.24,41.73 Q 83.77,48.31 72.16,54.64 Q 68.24,56.77 63.85,54.65 Z" fill="#ffffff"></path>
                    <path d="M 14.03,66.29 Q 27.40,51.66 40.57,37.33 A 0.54,0.54 52.1 0 1 41.44,37.44 Q 43.25,40.72 45.58,43.04 Q 47.66,45.11 47.71,45.17 Q 54.67,52.58 62.60,58.93 A 0.44,0.43 43.0 0 1 62.63,59.59 Q 42.87,77.87 22.77,95.78 Q 20.75,97.58 19.20,97.93 Q 16.72,98.49 14.81,96.94 Q 6.88,90.47 2.81,84.94 Q 1.47,83.11 2.03,80.84 Q 2.37,79.43 4.04,77.51 Q 8.97,71.84 14.03,66.29 ZM 42.9269,57.1766 A 3.76 3.76 0.0 0 0 37.6102,57.0930 L 33.1721,61.3938 A 3.76 3.76 0.0 0 0 33.0886,66.7106 L 33.3531,66.9834 A 3.76 3.76 0.0 0 0 38.6698,67.0670 L 43.1079,62.7662 A 3.76 3.76 0.0 0 0 43.1914,57.4494 L 42.9269,57.1766 Z" fill="#ffffff"></path>
                </svg>
                <svg className={Styles['b']} width="100%" height="50%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 20L31 22" className={Styles['bling_85']}></path>
                    <path d="M31.5 15H34.5" className={Styles['bling_85']}></path>
                    <path d="M29 10L31 8" className={Styles['bling_85']}></path>
                </svg>
            </span>
        </label>
    )
}

export { ChangeTheme };