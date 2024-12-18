import FilterForm from "./components/FilterForm";
import Navbar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import AutoShop from "./components/AutoShop";
import Footer from "../../components/Footer";
import PlatformNumbers from "./components/PlatformNumbers";
import CarListing from "./components/CarListing";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <FilterForm />
      <CarListing />
      <PlatformNumbers />
      <AutoShop />
      <Footer />
    </div>
  );
};

export default Home;
