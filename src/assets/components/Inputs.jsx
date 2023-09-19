import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center justify-center w-3/4 space-x-4">
        <input
          type="text"
          className="p-2 text-xl font-light capitalize shadow-xl focus:outline-none text-transform: placeholder:lowercase"
          placeholder="Search for city....."
        />
        <UilSearch
          size={25}
          className="text-white transition ease-out cursor-pointer hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white transition ease-out cursor-pointer hover:scale-125"
        />
      </div>
      <div className="flex flex-row items-center justify-center w-1/4">
        <button name="metric" className="text-xl font-light text-white">
          °C
        </button>
        <p className="mx-2 text-xl text-white ">|</p>
        <button name="imperial" className="text-xl font-light text-white">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
