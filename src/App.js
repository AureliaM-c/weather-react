import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to the Weather App</h1>
      <Header />
      <WeatherInfo />
      <Forecast />
      <Footer />
    </div>
  );
}
