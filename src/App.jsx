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
    <main>
      <section className="px-32 pt-3 pb-3 mx-auto mt-4 shadow-xl max-w-screen-xs bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-400">
        <TopButtons />
        <Inputs />

        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forcast tittle={"Daily Forcast"} />
      </section>
    </main>
  );
}

export default App;
