import { useState, useEffect } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";

function TimeAndLocation({ weatherData }) {
  const [time, setTime] = useState();
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        weatherData &&
        weatherData.location &&
        weatherData.location.localtime
      ) {
        //   {
        //     const date = new Date(weatherData.location.localtime);
        //     const currentTime = date.toLocaleTimeString([], {
        //       hour: "2-digit",
        //       minute: "2-digit",
        //       hour12: false,
        //     });
        //     setTime(currentTime);
        //   }
        const date = new Date(weatherData.location.localtime);
        const hours = date.getHours() % 12 || 12;
        const minutes = date.getMinutes();
        const ampm = date.getHours() >= 12 ? "PM" : "AM";
        const currentTime = `${hours}:${String(minutes).padStart(
          2,
          "0"
        )} ${ampm}`;
        setTime(currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [weatherData]);

  useEffect(() => {
    if (weatherData && weatherData.location && weatherData.location.localtime) {
      const date = new Date(weatherData.location.localtime);
      const formatted = format(date, "EEEE, d MMMM yyyy");
      setFormattedDate(formatted);
    }
  }, [weatherData]);

  if (!weatherData || !weatherData.location || !weatherData.location.name) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl text-slate700 font-extralight">
          {formattedDate && `${formattedDate} | `} {time}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium text-slate700">
          {weatherData.location.name}
        </p>
      </div>
    </div>
  );
}

TimeAndLocation.propTypes = {
  weatherData: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string,
      localtime: PropTypes.string,
    }),
  }),
};

export default TimeAndLocation;
