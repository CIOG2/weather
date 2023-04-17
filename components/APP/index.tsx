import { useContext } from 'react';
import { Loader } from '@components/Loader';
import { Map } from '@components/Map';
import { Header } from '@components/Header';
import { WeatherContext } from '@context/WeatherContext';
import { WeatherCard } from '@components/WeatherCard';
import { WeekWeatherCard } from '@components/WeekWeatherCard';
import { WeatherDetails } from '@components/WeatherDetails';
import Styles from './styles.module.scss';

const App = () => {
    const { mode, loading } = useContext(WeatherContext);

        return (
            <>
            {loading 
                ?(
                    <div
                        className={`${Styles[`body`]} ${Styles[`body--${mode}`]}`}
                    >
                        <Header/>
                        <main className={Styles[`main`]}>
                            <aside className={Styles[`main__aside`]}>
                                <WeatherCard/>
                                <WeekWeatherCard/>
                            </aside>
                            <section className={Styles[`main__section`]}>
                                <div className={Styles[`section__scroll`]}>
                                    <div className={Styles[`container__map`]}>
                                        <Map/> 
                                    </div>
                                    <WeatherDetails/>
                                </div>
                            </section>
                        </main>
                    </div>
                )
                :( <Loader />)
            }
        </>
    )
}

export { App };