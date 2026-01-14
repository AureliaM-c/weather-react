export default function WeatherInfo() {
  return (
    <div className="Weather-app-data">
      <div className="Weather-left">
        <h1 className="Weather-app-city">New York</h1>
        <p className="weather-app-description">
          <span id="time">Tuesday 10:00, </span>
          <span id="description">scattered clouds</span>
        </p>
        <p className="weather-app-description">
          Humidity: <strong id="humidity">83%</strong>, Wind:
          <strong id="wind-speed">1.34km/h</strong>
        </p>
      </div>
      <div className="weather-right">
        <div className="weather-app-temperature-container">
          <div className="weather-app-icon" style={{ fontSize: "100px" }}>
            ☀️
          </div>
          <div className="weather-app-value" id="temperature">
            24
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
    </div>
  );
}
