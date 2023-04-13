import DateComponent from "./components/DateComponent/DateComponent";
import Hero from "./components/Hero/Hero";
import AvailableSlots from "./components/AvailableSlots/AvailableSlots";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <DateComponent />
      <AvailableSlots />
    </div>
  );
}

export default App;
