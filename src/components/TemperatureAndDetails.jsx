import {
  UilTemperatureHalf,
  UilTear,
  UilWind,
  UilSun,
} from "@iconscout/react-unicons";
import PropTypes from "prop-types";

function TemperatureAndDetails({ weatherData }) {
  if (!weatherData || !weatherData.current) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-red-400">
        {weatherData.current.condition.text}
      </div>
      <div className="flex flex-row items-center justify-between py-3 text-slate700">
        <img src={weatherData.current.condition.icon} alt="weather image" />

        <p className="pl-20 text-8xl">{weatherData.current.temp_c} °</p>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center text-sm font-light">
            <UilTemperatureHalf size={18} className="mr-1" />
            Real feel:
            <span className="ml-1 font-medium">
              {weatherData.current.feelslike_c} °
            </span>
          </div>

          <div className="flex items-center justify-center text-sm font-light">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="ml-1 font-medium">
              {weatherData.current.humidity} %
            </span>
          </div>

          <div className="flex items-center justify-center text-sm font-light">
            <UilWind size={18} className="mr-1" />
            wind:{" "}
            <span className="ml-1 font-medium xxs">
              {weatherData.current.wind_kph} km/h
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center py-3 text-sm text-slate700">
        <UilSun />
        <p className="pl-3 font-light">
          UV index:{" "}
          <span className="mr-2 ">
            {weatherData.current.uv} |{" "}
            {weatherData.current.uv <= 2
              ? "Minimal to no risk of harm from unprotected sun exposure."
              : weatherData.current.uv > 2 && weatherData.current.uv <= 5
              ? "Moderate risk of harm from unprotected sun exposure"
              : weatherData.current.uv > 5
              ? "High risk of harm from unprotected sun exposure"
              : ""}
          </span>
        </p>
      </div>
    </div>
  );
}

TemperatureAndDetails.propTypes = {
  weatherData: PropTypes.shape({
    current: PropTypes.shape({
      temp_c: PropTypes.number,
      condition: PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
      }),
      feelslike_c: PropTypes.number,
      humidity: PropTypes.number,
      wind_kph: PropTypes.number,
      uv: PropTypes.number,
    }),
  }),
};

export default TemperatureAndDetails;
