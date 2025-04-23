import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Registry from "./Components/Registry/Registry";
import RSVP from "./Components/RSVP/RSVP";
import Story from "./Components/Story/Story";
import Accommodation from "./Components/Accommodation/Accommodation";
import DressCode from "./Components/DressCode/DressCode";
import Reception from "./Components/Reception/Reception";
import Ceremony from "./Components/Ceremony/Ceremony";

const App = () => {

  return (
    <>
    <section className="page">
      <Header />
      <Hero />
      <Story />
      <Ceremony />
      <Reception />
      <DressCode />
      <Accommodation />
      <Registry />
      <RSVP />
      <Footer />
      </section>
    </>
  );
};

export default App;
