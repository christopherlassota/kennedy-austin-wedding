import "./App.scss";
import BottomDecoration from "./Components/BottomDecoration/BottomDecoration";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Itinerary from "./Components/Itinerary/Itinerary";
import Registry from "./Components/Registry/Registry";
import RSVP from "./Components/RSVP/RSVP";
import Story from "./Components/Story/Story";
import Venue from "./Components/Venue/Venue";
import Accommodation from "./Components/Accommodation/Accommodation";

const App = () => {

  return (
    <>
    <section className="page">
      <Header />
      <Hero />
      <Story />
      <Venue />
      <Itinerary />
      <Accommodation />
      <Registry />
      <RSVP />
      <Footer />
      <BottomDecoration />
      </section>
    </>
  );
};

export default App;
