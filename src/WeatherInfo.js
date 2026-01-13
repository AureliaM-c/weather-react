export default function WeatherInfo() {
  return (
    <div className="Weather-app-data">
      <div className="Weather-data-left">
        <h1 className="Weather-city-name">New York</h1>
        <br />
        <p className="weather-app-description">
          <span id="time">Tuesday 10:00, </span>
          <span id="description">scattered clouds</span>
        </p>
        <p>
          Humidity: <strong id="humidity">--</strong>, Wind:
          <strong id="wind-speed">--</strong>
        </p>
      </div>
      <div className="weather-right">
        <div className="weather-app-temperature-container">
          <div className="weather-app-icon" style={{ fontSize: "100px" }}>
            ☀️
          </div>
          <div className="weather-app-value" id="temperature">
            21
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
    </div>
  );
}
