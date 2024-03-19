import "./App.css";
import Features from "./components/Features/Features";
import OfferSection from "./components/OfferSection/OfferSection";
import Banner from "./components/header/Banner/Banner";
import Navbar from "./components/header/Navbar/Navbar";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <Features />
      <OfferSection />
    </div>
  );
}

export default App;
