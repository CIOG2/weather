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


const SearchCity = () => {
    const { mode } = useContext(WeatherContext);

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
            consulta(lat, lng);
        } catch (error) {
            console.log(error);
        }
    }

    const consulta = async (lat: number, lng: number) => {
         const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=sp&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}`
        // const URL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}&include=minutely`
        
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
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