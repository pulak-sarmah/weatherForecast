import {
  UilArrowUp,
  UilArrowDown,
  UilTemperatureHalf,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        Rainy
      </div>
      <div className="flex flex-row items-center justify-between py-3 text-white">
        <img
          src="./the-sun-transparent-background-20.png"
          alt="weather image"
          className="w-20 "
        />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center text-sm font-light">
            <UilTemperatureHalf size={18} className="mr-1" />
            Real feel: <span className="ml-1 font-medium"> 32°</span>
          </div>

          <div className="flex items-center justify-center text-sm font-light">
            <UilTear size={18} className="mr-1" />
            Humidity: <span className="ml-1 font-medium"> 43%</span>
          </div>

          <div className="flex items-center justify-center text-sm font-light">
            <UilWind size={18} className="mr-1" />
            wind: <span className="ml-1 font-medium xxs"> 3 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center py-3 text-sm text-white">
        <UilSun />
        <p className="font-light">
          Rise: <span className="mr-2 font-medium">06:45 AM</span>{" "}
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className="mr-2 font-medium">06:45 PM</span>{" "}
        </p>
        <p className="font-light">|</p>

        <UilArrowUp />
        <p className="font-light">
          High: <span className="mr-2 font-medium">45°</span>{" "}
        </p>
        <p className="font-light">|</p>

        <UilArrowDown />
        <p className="font-light">
          Low: <span className="mr-2 font-medium">20°</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
