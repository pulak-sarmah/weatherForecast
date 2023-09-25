import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";
import PropTypes from "prop-types";

function Inputs({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery("");
  };
  const handleSearchClick = () => {
    onSearch(searchQuery);
    setSearchQuery("");
  };
  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onSearch(`${latitude},${longitude}`);
        setSearchQuery("");
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  };
  return (
    <div className="flex flex-row justify-center my-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center justify-center space-x-4">
          <input
            type="text"
            className="p-2 pl-2 text-xl font-light capitalize shadow-xl focus:outline-none text-transform: placeholder:lowercase"
            placeholder="Search for city....."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <UilSearch
            size={25}
            className="transition ease-out cursor-pointer text-slate700 hover:scale-125"
            onClick={handleSearchClick}
          />
          <UilLocationPoint
            size={25}
            className="transition ease-out cursor-pointer text-slate700 hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>
      </form>
    </div>
  );
}
Inputs.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default Inputs;
