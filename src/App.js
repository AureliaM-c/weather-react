import "./App.css";
import "./Header.css";
import "./WeatherInfo.css";
import "./Forecast.css";
import "./Footer.css";

import Footer from "./Footer";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="weather-app">
      <h1>Welcome to the Weather App</h1>
      <Header />
      <WeatherInfo />
      <Forecast />
      <Footer />
    </div>
  );
}
