import { useContext } from 'react';
import { Header } from '@components/Header';
import { WeatherContext } from '@context/WeatherContext';
import Styles from './styles.module.scss';
import { WeatherCard } from '@components/WeatherCard';
import { WeekWeatherCard } from '@components/WeekWeatherCard';
import { Loader } from '@components/Loader';

const App = () => {
    const { mode, loading } = useContext(WeatherContext);

        return (
            <>
            {loading 
                ?(
                    <div
                        className={`${Styles[`body`]} ${Styles[`body--${mode}`]}`}
                    >
                        <Header />
                        <main className={Styles[`main`]}>
                            <aside className={Styles[`main__aside`]}>
                                <WeatherCard />
                                <WeekWeatherCard/>
                            </aside>
                        </main>
                    </div>
                )
                :( <Loader />)
            }
        </>
    )
}

export { App };