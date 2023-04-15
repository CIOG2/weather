import { useContext } from 'react';
import { Header } from '@components/Header';
import { WeatherContext } from '@context/WeatherContext';
import Styles from './styles.module.scss';

const App = () => {
    const { mode } = useContext(WeatherContext);

    return (
        <div
            className={`${Styles['body']} ${Styles[`body--${mode}`]}`}
        >
            <Header />
            <main>
          
            </main>
      </div>
    )
}

export { App };