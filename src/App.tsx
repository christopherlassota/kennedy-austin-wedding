import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Itinerary from "./Components/Itinerary/Itinerary";
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
    </>
  );
};

export default App;
