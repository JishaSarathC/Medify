
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import {
  Container,
  Typography,
  Box
} from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import HealthCare from "../components/HealthCare/HealthCare";
import DownTheApp from "../components/DownTheApp/DownTheApp";
import Footer from "../components/MedifyFooter/Footer";
import Sensodine from "../assets/Sensodine.png";
import SearchCountry from "../components/SearchCountry/SearchCountry";
import "./SearchResults.css";
import Locationmarker from "../assets/Locationmarker.png";


export default function SearchResults() {
  const location = useLocation();

  const stateName = location.state?.state;
  const cityName = location.state?.city;

  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setLoading(true);
        const response = await fetch(
  `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(stateName)}&city=${encodeURIComponent(cityName)}`
);

        const data = await response.json();

        console.log("Hospital data:", data);

        setHospitals(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
        setHospitals([]);
      }finally{
        setLoading(false);
      }
    };

    if (stateName && cityName) {
      fetchHospitals();
    }else{
      setLoading(false);
    }
  }, [stateName, cityName]);

  return (
    <div>
      <Navbar />
      <Box
  sx={{
    position: "relative",
    height: "110px",
    background: "linear-gradient(to right, #2AA7FF, #0070C0)",
    marginBottom: "20px"
  }}
>
  <Box
    sx={{
      position: "absolute",
      top: "40px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "82%",
      zIndex: 2
    }}
  >
    <SearchCountry isResultsPage={true} />
  </Box>
</Box>
{/* Search Results Section */}
<Box sx={{ backgroundColor: "#f5faff", minHeight: "100vh", py: 4 }}>

  <Container maxWidth="lg">

    {loading ? (
      <Typography>Loading medical centers...</Typography>
    ) : (
      <>
        {/* Search Results Heading */}
        <Typography
          component="h1"
          variant="h4"
          sx={{
            color: "#102851",
            fontWeight: 600,
            marginBottom: 2
          }}
        >
          {hospitals.length} medical centers available in {cityName?.toLowerCase()}
        </Typography>

        <Typography sx={{ marginBottom: 3 }}>
          Book appointments with minimum wait-time & verified doctor details
        </Typography>

        {/* Hospital Cards + Sensodine */}
        <Box className="results-layout">

          {/* Left side - Hospital Cards */}
          <Box className="hospital-list">
            {hospitals.map((hospital) => (
              <HospitalCard
                key={hospital["Provider ID"]}
                hospital={hospital}
              />
            ))}
          </Box>

          {/* Right side - Sensodine */}
          <Box className="oral-health-ad">
            <img
              src={Sensodine}
              alt="Oral Health Day advertisement"
            />
          </Box>

        </Box>
      </>
    )}

  </Container>
</Box>
</div>
)}