import "./App.css";
import Features from "./components/Features/Features";
import Banner from "./components/header/Banner/Banner";
import Navbar from "./components/header/Navbar/Navbar";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <Features />
    </div>
  );
}

export default App;
