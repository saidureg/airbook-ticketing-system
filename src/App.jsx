import "./App.css";
import Features from "./components/Features/Features";
import OfferSection from "./components/OfferSection/OfferSection";
import PopularAirlines from "./components/PopularAirlines/PopularAirlines";
import Banner from "./components/header/Banner/Banner";
import Navbar from "./components/header/Navbar/Navbar";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <Features />
      <OfferSection />
      <PopularAirlines />
    </div>
  );
}

export default App;
