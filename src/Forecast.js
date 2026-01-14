export default function Forecast() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div className="weather-forecast">
      {days.map((day, index) => (
        <div className="weather-forecast-day" key={index}>
          <div className="weather-forecast-date">{day}</div>
          <div className="weather-forecast-icon">☀️</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">
              <strong>21°C</strong>
            </span>
            {"  "}
            <span className="weather-forecast-temperature-min">15°C</span>
          </div>
        </div>
      ))}
    </div>
  );
}
