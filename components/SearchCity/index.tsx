import Styles from '@components/SearchCity/styles.module.scss';
import { OptionCity } from './OptionCity';
import { WeatherContext } from '@context/WeatherContext';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete';
import { 
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption, 
} from '@reach/combobox';
import { useContext } from 'react';
import { City } from '@interfaces/index';

const SearchCity = () => {
    const { mode, setCity, fetchWeatherCity, fetchWeatherWeek } = useContext(WeatherContext);

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete();
    
    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();
        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            const objCity: City = {
                city: address,
                latitud: lat,
                longitud: lng,
                autoDetected: false,
            }
            setCity(objCity);
            fetchWeatherCity(objCity);
            fetchWeatherWeek(objCity);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                    disabled={!ready}
                placeholder="Buscar ciudad..."
                className={`
                    ${Styles['input__search']} ${Styles[`input__search--${mode}`]}
                    ${(data.length >= 1) && Styles['input__search--active']}
                    
            `}/>
            <ComboboxPopover
                className={`${Styles['combobox__popover']} ${Styles[`combobox__popover--${mode}`]}`}
            >
                <ComboboxList>
                    {status === 'OK' && data.map(({ place_id, description, structured_formatting }) => (
                        <ComboboxOption 
                            key={place_id}
                            value={description} 
                            className={`${Styles['combobox__option']} ${Styles[`combobox__option--${mode}`]}`}
                        >
                            <OptionCity
                                mainText={structured_formatting.main_text}
                                description={description}
                            />
                        </ComboboxOption>
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}

export { SearchCity };