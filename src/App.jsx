// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import "./assets/index.css";
import "./assets/App.css";
import TopButtons from "./assets/components/TopButtons";
import TimeAndLocation from "./assets/components/timeAndLocation";
import Inputs from "./assets/components/inputs";
import TemperatureAndDetails from "./assets/components/TemperatureAndDetails";
import Forcast from "./assets/components/Forcast";
function App() {
  return (
    <div className="max-w-screen-md px-32 pt-1 pb-2 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forcast tittle={"Daily Forcast"} />
    </div>
  );
}

export default App;
