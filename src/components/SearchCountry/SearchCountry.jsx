
import React, { useState, useEffect } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  InputAdornment
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Search from "../../assets/Search.png";
import "./SearchCountry.css";
import Locationmarker from "../../assets/Locationmarker.png"

export default function SearchCountry({ isResultsPage=false}) {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [stateName, setStateName] = useState("");
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");

  // Fetch states
  useEffect(() => {
  const fetchStates = async () => {
    try {
      const response = await fetch(
        "https://meddata-backend.onrender.com/states"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch states");
      }

      const data = await response.json();

      console.log("States API response:", data);

      setStates(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching states:", error);
      setStates([]);
    }
  };

  fetchStates();
}, []);

  // Fetch cities whenever state changes
  useEffect(() => {
    if (!stateName) 
    
      return;
    

    const fetchCities = async () => {
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/cities/${stateName}`
        );

        const data = await response.json();
        setCities(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching cities:", error);
        setCities([]);
      }
    };

    fetchCities();
  }, [stateName]);

  const handleStateChange = (event) => {
    setStateName(event.target.value);
    setCityName("");
    setCities([]);
  };

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!stateName || !cityName) {
      alert("Please select both state and city");
      return;
    }

    navigate("/search", {
      state: {
        state: stateName,
        city: cityName
      }
    });
  };

  return (
    <form onSubmit={handleSearch} className={`statecity ${isResultsPage ? "results-search" : ""}`}>

      <div >
        <FormControl fullWidth>
          <Select
          id="state"
            value={stateName}
            onChange={handleStateChange}
            displayEmpty
            startAdornment={
    <InputAdornment position="start">
      <img src={isResultsPage ? Locationmarker : Search}
       alt={isResultsPage ? "Location" : "Search"} className="search-icon" />
    </InputAdornment>
            }
          >
            <MenuItem value="">
              state
            </MenuItem>

            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div >
        <FormControl fullWidth>
          <Select
          id="city"
            value={cityName}
            onChange={handleCityChange}
            displayEmpty
            disabled={!stateName}
            startAdornment={
              <InputAdornment position="start">
                <img src={isResultsPage ? Locationmarker : Search}
                 alt={isResultsPage ? "Location" : "Search"} className="search-icon" />
              </InputAdornment>
            }
          >
            <MenuItem value="">
              city
            </MenuItem>

            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Button
        type="submit"
        id="searchBtn"
        variant="contained"
      >
        <img src={Search} alt="Search" className="search-icon-white" />
        Search
      </Button>

    </form>
  );
}
