import { useLoadScript } from "@react-google-maps/api";
import { SearchCity } from '@components/SearchCity';
import { ChangeTheme } from '@components/ChangeTheme';
import Styles from '@components/Header/styles.module.scss';
import { useContext } from "react";
import { WeatherContext } from "@context/WeatherContext";

const Header = () => {
    const { mode } = useContext(WeatherContext)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        libraries: ["places"],
    });

    return (
        <header className={Styles['header']}>
            <nav className={Styles['header__nav']}>
                <picture className={Styles['nav__logo']}>
                    <img 
                        src="/images/logo.png" 
                        alt="logo" 
                        className={Styles['nav__logo--image--' + mode]}
                    />
                </picture>
                {isLoaded && 
                    <div className={Styles['nav__search']}>
                        <SearchCity />
                    </div>
                }
                <div className={Styles['nav__theme--button']}>
                    <ChangeTheme />
                </div>

            </nav>
        </header>
    )
}

export { Header };