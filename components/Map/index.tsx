import { GoogleMap } from '@react-google-maps/api';
import { useContext } from 'react';
import { WeatherContext } from '@context/WeatherContext';

const Map = () => {
    const { city } = useContext(WeatherContext);

    const mapStyles = {
        height: "100%",
        width: "100%",
        borderRadius: '20px',
    }

  const defaultCenter = {
    lat: city.latitud,
    lng: city.longitud
  }

  return (
    <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
    />
  );
}

export { Map };