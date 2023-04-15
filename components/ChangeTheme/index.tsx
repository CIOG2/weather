import styles from '@components/ChangeTheme/styles.module.scss';
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
        <div className={styles.toggleWrapper} onClick={changeState}>
            <div className={`${styles.dn} ${(mode === 'dark') ? styles.checked : ''}`} />
            <label className={`${styles['toggle']} ${styles[`toggle--${mode}`]}`}>
                <span className={styles.toggle__handler}>
                    <span className={`${styles.crater} ${styles['crater--1']}`}></span>
                    <span className={`${styles.crater} ${styles['crater--2']}`}></span>
                    <span className={`${styles.crater} ${styles['crater--3']}`}></span>
                </span>
                <span className={`${styles.star} ${styles['star--1']}`}></span>
                <span className={`${styles.star} ${styles['star--2']}`}></span>
                <span className={`${styles.star} ${styles['star--3']}`}></span>
                <span className={`${styles.star} ${styles['star--4']}`}></span>
                <span className={`${styles.star} ${styles['star--5']}`}></span>
                <span className={`${styles.star} ${styles['star--6']}`}></span>
            </label>
        </div>
    )
}

export { ChangeTheme };