import { UilTemperatureHalf, UilTear } from "@iconscout/react-unicons";
import PropTypes from "prop-types";

function Forcast({ tittle }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium text-white uppercase">{tittle}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between gap-5 text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light"> Mon</p>
          <img
            src="./the-sun-transparent-background-20.png"
            alt="weather image"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
          <p className="text-xs"> sunny</p>
          <div className="mt-2">
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTemperatureHalf size={20} />
              <span className="ml-1 text-xs font-light"> 32°</span>
            </div>
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTear size={20} />
              <span className="ml-1 text-xs font-light"> 43%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light"> Mon</p>
          <img
            src="./the-sun-transparent-background-20.png"
            alt="weather image"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
          <p className="text-xs"> sunny</p>
          <div className="mt-2">
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTemperatureHalf size={20} />
              <span className="ml-1 text-xs font-light"> 32°</span>
            </div>
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTear size={20} />
              <span className="ml-1 text-xs font-light"> 43%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light"> Mon</p>
          <img
            src="./the-sun-transparent-background-20.png"
            alt="weather image"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
          <p className="text-xs"> sunny</p>
          <div className="mt-2">
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTemperatureHalf size={20} />
              <span className="ml-1 text-xs font-light"> 32°</span>
            </div>
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTear size={20} />
              <span className="ml-1 text-xs font-light"> 43%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light"> Mon</p>
          <img
            src="./the-sun-transparent-background-20.png"
            alt="weather image"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
          <p className="text-xs"> sunny</p>
          <div className="mt-2">
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTemperatureHalf size={20} />
              <span className="ml-1 text-xs font-light"> 32°</span>
            </div>
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTear size={20} />
              <span className="ml-1 text-xs font-light"> 43%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light"> Mon</p>
          <img
            src="./the-sun-transparent-background-20.png"
            alt="weather image"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
          <p className="text-xs"> sunny</p>
          <div className="mt-2">
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTemperatureHalf size={20} />
              <span className="ml-1 text-xs font-light"> 32°</span>
            </div>
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTear size={20} />
              <span className="ml-1 text-xs font-light"> 43%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light"> Mon</p>
          <img
            src="./the-sun-transparent-background-20.png"
            alt="weather image"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
          <p className="text-xs"> sunny</p>
          <div className="mt-2">
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTemperatureHalf size={20} />
              <span className="ml-1 text-xs font-light"> 32°</span>
            </div>
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTear size={20} />
              <span className="ml-1 text-xs font-light"> 43%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light"> Mon</p>
          <img
            src="./the-sun-transparent-background-20.png"
            alt="weather image"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
          <p className="text-xs"> sunny</p>
          <div className="mt-2">
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTemperatureHalf size={20} />
              <span className="ml-1 text-xs font-light"> 32°</span>
            </div>
            <div className="flex flex-row items-center justify-center mb-1">
              <UilTear size={20} />
              <span className="ml-1 text-xs font-light"> 43%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Forcast.propTypes = {
  tittle: PropTypes.string.isRequired,
};

export default Forcast;
