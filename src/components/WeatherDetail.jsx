const WeatherDetail = ({ weather }) => {
//   console.log(weather);
    const celsiusToFahrenheit = (tempCelsius) => {
        const tempF = ((tempCelsius * (9 / 5)) + 32).toFixed(1)
        return tempF
    }

  return (
    <article className="grid gap-4 text-center">
      <h1>
        {weather.name}, {weather.sys.country}
      </h1>
      <div className="grid gap-4">
        {/* Section 1 Temp, description and img */}
        <section className="bg-white/60 p-2 rounded-xl grid grid-cols-2 items-center">
          <h2 className="col-span-2">{weather.weather[0].description}</h2>
          <span>{celsiusToFahrenheit(weather.main.temp)} °C {weather.main.temp}</span>
          <div>
            <img
              className="block mx-auto"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </section>
        {/* Section 2 Additional details */}
        <section className="grid grid-cols-3 justify-items-center bg-white/60 rounded-xl p-2">
          <div className="flex">
            <div>
              <img src="/wind.svg" alt="" />
            </div>
            <span>{weather.wind.speed} m/s</span>
          </div>
          <div className="flex">
            <div>
              <img src="/humidity.svg" alt="" />
            </div>
            <span>{weather.main.humidity} %</span>
          </div>
          <div className="flex">
            <div>
              <img src="/pressure.svg" alt="" />
            </div>
            <span>{weather.main.pressure} hPa</span>
          </div>
        </section>
      </div>
      <button className="bg-white text-black p-1 rounded-full">Cambiar a F°</button>
    </article>
  );
};
export default WeatherDetail;
