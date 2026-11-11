import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchCity from "../components/Search/SearchCity";
import Carousel from "../components/Carousel/Carousel";
import Specialise from "../components/Specialise/Specialise";
import Specialist from "../components/Specialist/Specialist";
import PatientCare from "../components/PatientCare/PatientCare";
import News from "../components/News/News";
import FamilyCare from "../components/FamilyCare/FamilyCare";
import HealthCare from "../components/HealthCare/HealthCare";
import DownTheApp from "../components/DownTheApp/DownTheApp";
import Footer from "../components/MedifyFooter/Footer";

function HomePage() {
 

  return (
    <div>
      
      <Navbar />
      <Hero />
      <SearchCity />
      <Carousel />
      <Specialise />
      <Specialist />
      <PatientCare />
      <News/>
      <FamilyCare/>
      <HealthCare />
      <DownTheApp />
      <Footer />
    </div>
  );
}

export default HomePage
