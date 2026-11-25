
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

import DownTheApp from "../components/DownTheApp/DownTheApp";
import Footer from "../components/MedifyFooter/Footer";
import Sensodine from "../assets/Sensodine.png";
import imageH1 from "../assets/imageH1.png";
import hug from "../assets/hug.png"
import "./MyBookingPage.css";

import {
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  FormControl,
  OutlinedInput,
  Button,
  InputAdornment
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function MyBookingPage() {

  const [bookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings") || "[]");
  });
  const [searchText, setSearchText] = useState("");
const [filteredBookings, setFilteredBookings] = useState(bookings);
const getHospitalName = (booking) => {
  return (
    booking.hospitalName ||
    booking["Hospital Name"] ||
    ""
  ).toLowerCase();
};
const handleSearch = () => {
  const results = bookings.filter((booking) =>
    getHospitalName(booking).includes(searchText.toLowerCase())
  );

  setFilteredBookings(results);
};
  return (
  <>
    <Navbar />
  <Box className="my-bookings-header">

  {/* My Bookings Title */}
  <Typography
    component="h1"
    variant="h5"
    className="booking-title"
    sx={{
      color: "#FFFFFF",
      fontWeight: 600
    }}
  >
    My Bookings
  </Typography>

  {/* Search Panel */}
  <Box className="my-bookings-search">

    <FormControl fullWidth>
      <OutlinedInput
        placeholder="Search By Hospital"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        size="small"
        sx={{
          backgroundColor: "#f8f9fa",
          fontSize: "13px",
          height: "50px"
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#9CA3AF", fontSize: 20 }} />
          </InputAdornment>
        }
      />
    </FormControl>

    <Button
      variant="contained"
      onClick={handleSearch}
      startIcon={<SearchIcon />}
      sx={{
        backgroundColor: "#2AA7FF",
        textTransform: "none",
        minWidth: "112px",
        height: "50px",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#168FE0",
          boxShadow: "none"
        }
      }}
    >
      Search
    </Button>

  </Box>

</Box>

    <Box sx={{ backgroundColor: "#f5faff", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">

       

        {/* Two-column layout */}
        <Box
        className="booking-layout"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 2,
            alignItems: "start"
          }}
        >

          {/* Left side - Booking Cards */}
          <Box 
            className="booking-card"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

            {filteredBookings.length === 0 ? (
              <Typography variant="h6">
                No bookings available.
              </Typography>
            ) : (
              filteredBookings.map((booking) => (
                <Card
                  key={booking.id}
                  sx={{
                    padding: 2,
                    borderRadius: 2,
                    boxShadow: 2
                  }}
                >
                  <CardContent>
                    <Box 
                     className="booking-card-content"
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}>

                      <img
                        src={imageH1}
                        alt="Hospital"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain"
                        }}
                      />

                      <Box
  className="booking-card-content"
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "100px minmax(0, 1fr) auto"
    },
    alignItems: "start",
    gap: 2
  }}
>
  {/* Hospital Image */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    
  </Box>

  {/* Hospital Details */}
  <Box className="booking-details">

    <Typography
      component="h3"
      sx={{
        color: "#00AEEF",
        fontSize: "16px",
    fontWeight: 700,
     textTransform: "capitalize"
      }}
    >
      {getHospitalName(booking)}
    </Typography>

    <Typography
      sx={{
        fontSize: "13px",
        fontWeight: 600,
        color: "#414146",
         textTransform: "capitalize"
      }}
    >
      {`${booking.city}, ${booking.state}`.toLowerCase()}
    </Typography>

    <Typography
      sx={{
        fontSize: "13px",
        color: "#414146",
        lineHeight: 1.4,
        textTransform: "capitalize"
      }}
    >
       {booking.address?.toLowerCase()}
    </Typography>

    {/* Rating */}
    <Box sx={{ marginTop: 2 }}>
      <img
        src={hug}
        alt="Hospital rating"
        style={{
          width: "48px",
          height: "auto",
          display: "block"
        }}
      />
    </Box>

  </Box>

  {/* Appointment Date and Time */}
  <Box
    className="appointment-info"
    sx={{
      display: "flex",
      flexDirection: { xs: "row", sm: "row" },
      gap: 1,
      alignItems: "flex-start",
      justifyContent: "flex-end",
      flexWrap: "wrap"
    }}
  >

    {/* Appointment Time */}
    <Box
      sx={{
        border: "1px solid #2AA7FF",
        borderRadius: "3px",
        padding: "4px 9px",
        color: "#2AA7FF",
        fontSize: "11px",
        whiteSpace: "nowrap"
      }}
    >
      {booking.time}
    </Box>

    {/* Appointment Date */}
    <Box
      sx={{
        border: "1px solid #00A500",
        borderRadius: "3px",
        padding: "4px 9px",
        color: "#00A500",
        fontSize: "11px",
        fontWeight: 600,
        whiteSpace: "nowrap"
      }}
    >
      {new Date(booking.date + "T00:00:00").toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "long",
          year: "numeric"
        }
      )}
    </Box>

  </Box>

</Box>

                    </Box>
                  </CardContent>
                </Card>
              ))
            )}

          </Box>

          {/* Right side - Oral Health Advertisement */}
          <Box
          className="oral-health-ad"
            component="img"
            src={Sensodine}
            alt="Oral Health Day advertisement"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: 2
            }}
          />

        </Box>
      </Container>
    </Box>

    <DownTheApp />
    <Footer />

  </>
)}