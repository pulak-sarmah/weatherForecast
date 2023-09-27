import "./index.css";
import "./App.css";

import TimeAndLocation from "./components/timeAndLocation";
import Inputs from "./components/inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import { WeatherService, inputData } from "./services/WeatherService";
import Forcast from "./components/Forcast";
import { useState, useEffect } from "react";

function App() {
  const [weatherData, setweatherData] = useState(null);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const weatherData = await WeatherService(inputData);
        setweatherData(weatherData);
      } catch (err) {
        console.error(err.message());
      }
      setLoding(false);
    }

    fetchData();
  }, []);

  const handleSearch = async (city) => {
    try {
      const data = await WeatherService({ ...inputData, city });
      setweatherData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  let weatherClass = "";

  if (weatherData) {
    const condition = weatherData.current.condition.text.toLowerCase();

    if (condition.includes("clear")) {
      weatherClass = "clear";
    } else if (condition.includes("cloud")) {
      weatherClass = "cloudy";
    } else if (condition.includes("rain")) {
      weatherClass = "rainy";
    } else if (condition.includes("snow")) {
      weatherClass = "snowy";
    } else if (condition.includes("overcast")) {
      weatherClass = "overcast";
    } else if (condition.includes("mist") || condition.includes("haze")) {
      weatherClass = "mist";
    } else {
      weatherClass = "bg-gradient-to-br from-cyan-700 to-blue-200";
    }
  }

  return (
    <main
      className={`px-32 pt-3 pb-6 mx-auto mt-4 shadow-xl max-w-screen-xs bg-gradient-to-br ${weatherClass} h-fit shadow-gray-400 weather-background rounded-lg `}
    >
      {loading ? (
        // Display loading icon
        <div className="flex items-center justify-center h-full">
          <div className="w-16 h-16 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin "></div>
        </div>
      ) : (
        <>
          <Inputs onSearch={handleSearch} />
          <TimeAndLocation weatherData={weatherData} />
          <TemperatureAndDetails weatherData={weatherData} />
          <Forcast weatherData={weatherData} />
        </>
      )}
    </main>
  );
}

export default App;
