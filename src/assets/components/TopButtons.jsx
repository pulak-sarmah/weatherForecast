import PropTypes from "prop-types";
function TopButtons() {
  const cities = [
    {
      id: 1,
      tittle: "London",
    },
    {
      id: 2,
      tittle: "India",
    },
    {
      id: 3,
      tittle: "California",
    },
    {
      id: 4,
      tittle: "Sydny",
    },
    {
      id: 5,
      tittle: "Cicago",
    },
    {
      id: 6,
      tittle: "Ireland",
    },
  ];
  return (
    <div className="flex items-center justify-around my-3">
      {cities.map((city) => (
        <City key={city.id} cityObj={city} />
      ))}
    </div>
  );
}

function City({ cityObj }) {
  return (
    <button className="text-sm font-medium text-white ">
      {cityObj.tittle}
    </button>
  );
}
City.propTypes = {
  cityObj: PropTypes.shape({
    tittle: PropTypes.string,
  }),
};

export default TopButtons;
