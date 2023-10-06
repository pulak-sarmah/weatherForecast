import { UilTemperatureHalf } from "@iconscout/react-unicons";
import PropTypes from "prop-types";

function Forcast({ weatherData }) {
  if (!weatherData || !weatherData.forecast) {
    return null;
  }
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase text-slate-700">Daily forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-wrap justify-center gap-8">
        {/* {weatherData.forecast.forecastday.slice(1, 7).map((item) => ( */}
        {weatherData.forecast.forecastday.map((item) => (
          <Card key={item.date_epoch} weatherDataObj={item} />
        ))}
      </div>
    </div>
  );
}

Forcast.propTypes = {
  weatherData: PropTypes.shape({
    forecast: PropTypes.shape({
      forecastday: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

function Card({ weatherDataObj }) {
  const dateObj = new Date(weatherDataObj.date);
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(dateObj);
  return (
    <div className="flex flex-col items-center justify-center font-medium text-slate-1000">
      <p className="text-sm font-light"> {dayOfWeek}</p>
      <img
        src={weatherDataObj.day.condition?.icon}
        alt="weather image"
        className="w-12 my-1"
      />
      <p className="font-medium">{weatherDataObj.day?.avgtemp_c}</p>
      <p className="text-xs"> {weatherDataObj.day.condition?.text}</p>
      <div className="mt-2">
        <div className="flex flex-row items-center justify-center mb-1">
          <UilTemperatureHalf size={20} />
          <span className="ml-1 text-xs ">
            {" "}
            {weatherDataObj.day?.maxtemp_c} {""} °
          </span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  weatherDataObj: PropTypes.shape({
    date: PropTypes.string,
    day: PropTypes.shape({
      maxtemp_c: PropTypes.number,
      avgtemp_c: PropTypes.number,
      condition: PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string,
      }),
    }),
  }),
};
export default Forcast;
