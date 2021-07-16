//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import { useEffect, useState } from "react";
import axios from "axios";
import { usePosition } from "use-position";

function App() {
  const [weather, setWeather] = useState();

  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
   
    try {
      const { data } = await axios.get(
        'htpss://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}'
      );
      setWeather(data);
    } catch {
      alert(" Hata oluştu!");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div>
      <h2> Hava Durumu</h2>
      <hr />
      <havaDurumu weather={weather}></havaDurumu>
    </div>
  );
}

export default App;
