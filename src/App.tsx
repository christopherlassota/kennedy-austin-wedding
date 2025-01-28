import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Itinerary from "./Components/Itinerary/Itinerary";
import Registry from "./Components/Registry/Registry";
import Story from "./Components/Story/Story";
import Venue from "./Components/Venue/Venue";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Venue />
      <Itinerary />
      <Registry />
    </>
  );
};

export default App;
