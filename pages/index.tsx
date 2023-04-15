import { WeatherProvider } from "@context/WeatherContext";
import { App } from "@components/APP";

const Home = () => {

  return (
    <WeatherProvider>
      <App />
    </WeatherProvider>
  )
}

export default Home;