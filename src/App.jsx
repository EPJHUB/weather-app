import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import WeatherDetail from "./components/WeatherDetail";
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=7bd8f457bfa8c38bac9fd06024a138e2
function App() {
  const [weather, setWeather] = useState(null)
  const success = (pos) => {
    const {coords: {latitude, longitude},} = pos
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7bd8f457bfa8c38bac9fd06024a138e2&lang=es&units=metric`)
    .then(({data}) => setWeather(data))
    .catch(({error}) => {error})
    // console.log(latitude, longitude)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])
  
  return (
    <main className="flex justify-center items-center h-screen bg-black text-white"> 
    {/* //bg-[url(/.....)] */}
    {
      weather? <WeatherDetail weather={weather}/>: <span>Cargando..</span>
    }
    </main>
  );
}

export default App;
