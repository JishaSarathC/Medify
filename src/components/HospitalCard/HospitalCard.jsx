

import React, { useState } from "react";
import imageH1 from "../../assets/imageH1.png";
import hug from "../../assets/hug.png";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";

export default function HospitalCard({ hospital }) {

  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Generate the next seven days
  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    const dateKey = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0")
    ].join("-");

    return {
      dateKey,
      day: date.toLocaleDateString("en-US", {
        weekday: "short"
      }),
      dateNumber: date.getDate(),
      isToday: index === 0
    };
  });

  // Available time slots
  const timeSlots = {
    Morning: ["09:00 AM", "10:00 AM", "11:00 AM"],
    Afternoon: ["12:00 PM", "01:00 PM", "02:00 PM"],
    Evening: ["05:00 PM", "06:00 PM", "07:00 PM"]
  };

  // Save booking
  const handleBooking = () => {

    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time slot");
      return;
    }

    const newBooking = {
      id: Date.now(),
      hospitalName: hospital["Hospital Name"],
      address: hospital["Address"],
      city: hospital["City"],
      state: hospital["State"],
      date: selectedDate,
      time: selectedTime,
      providerId: hospital["Provider ID"]
    };

    const existingBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

    existingBookings.push(newBooking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(existingBookings)
    );

    alert("Appointment booked successfully!");

    setShowBooking(false);
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <Card
sx={{
margin: "16px 0",
padding: { xs: 1.5, sm: 2 },
borderRadius: "12px",
boxShadow: "none",
backgroundColor: "#FFFFFF",
width: "100%"
}}>



<CardContent sx={{ padding: "12px !important" }}>

  {/* Main Hospital Card Layout */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "75px minmax(0, 1fr)",
        sm: "145px minmax(0, 1fr) 225px"
      },
      columnGap: { xs: 1.5, sm: 2 },
      rowGap: 2,
      alignItems: "center"
    }}
  >

    {/* Hospital Image */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridColumn: "1",
        gridRow: { xs: "1 / span 2", sm: "1" }
      }}
    >
      <img
        src={imageH1}
        alt="Hospital"
        style={{
          width: "100%",
          maxWidth: "130px",
          height: "130px",
          objectFit: "contain"
        }}
      />
    </Box>

    {/* Hospital Details */}
<Box sx={{ minWidth: 0 }}>

  {/* Hospital Name */}
  <Typography
    component="h3"
    sx={{
      fontFamily: "Poppins, sans-serif",
      color: "#14BEF0",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
      letterSpacing: "0%",
      textTransform: "capitalize"
    }}
  >
    {hospital["Hospital Name"]?.toLowerCase()}
  </Typography>

  {/* City and State */}
  <Typography
    sx={{
      fontFamily: "Poppins, sans-serif",
      color: "#414146",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "19.6px",
      textTransform: "capitalize"
    }}
  >
    {`${hospital["City"]}, ${hospital["State"]}`.toLowerCase()}
  </Typography>

  {/* Address */}
  <Typography
    sx={{
      fontFamily: "Poppins, sans-serif",
      color: "#414146",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19.6px",
      textTransform: "capitalize"
    }}
  >
    {hospital["Address"]?.toLowerCase()}
  </Typography>

  {/* Hospital Type */}
  <Typography
    sx={{
      fontFamily: "Poppins, sans-serif",
      color: "#414146",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19.6px",
      marginTop: "4px"
    }}
  >
    {hospital["Hospital Type"]}
  </Typography>

      {/* Consultation Fee */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 0.5,
          marginTop: 1
        }}
      >
        <Typography
          sx={{
            color: "#00A500",
            fontWeight: 700,
            fontSize: "14px"
          }}
        >
          FREE
        </Typography>

        <Typography
          sx={{
            color: "#858585",
            textDecoration: "line-through",
            fontSize: "14px"
          }}
        >
          ₹500
        </Typography>

        <Typography sx={{ color: "#414146", fontSize: "14px" }}>
          Consultation fee at clinic
        </Typography>
      </Box>

      {/* Hospital Rating */}
      <Box sx={{ marginTop: 1.5 }}>
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

    {/* Availability and Booking */}
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "flex-start", sm: "flex-end" },
        justifyContent: "center",
        gap: 1.5,
        gridColumn: { xs: "2", sm: "3" },
        gridRow: { xs: "3", sm: "1" }
      }}
    >

      <Typography
        sx={{
          color: "#00A500",
          fontSize: "15px",
          fontWeight: 600
        }}
      >
        Available Today
      </Typography>

      <Button
        variant="contained"
        onClick={() => setShowBooking(!showBooking)}
        sx={{
          backgroundColor: "#2AA7FF",
          color: "#FFFFFF",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "14px",
          padding: "10px 22px",
          minWidth: { xs: "100%", sm: "220px" },
          whiteSpace: "nowrap",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#168FE0",
            boxShadow: "none"
          }
        }}
      >
        Book FREE Center Visit
      </Button>

    </Box>

  </Box>

  {/* Booking Section */}
  {showBooking && (
    <Box sx={{ marginTop: 3 }}>

      <Typography variant="h6">
        Select Appointment Date
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          marginTop: 2
        }}
      >
        {dates.map((date) => (
          <Button
            key={date.dateKey}
            variant={
              selectedDate === date.dateKey
                ? "contained"
                : "outlined"
            }
            onClick={() => {
              setSelectedDate(date.dateKey);
              setSelectedTime("");
            }}
          >
            <Box>
              <Typography component="p" variant="body2">
                {date.isToday ? "Today" : date.day}
              </Typography>

              <Typography component="p">
                {date.dateNumber}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>

      {/* Time Slots */}
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Select Time Slot
      </Typography>

      {Object.entries(timeSlots).map(([period, slots]) => (
        <Box key={period} sx={{ marginTop: 2 }}>

          <Typography component="p" variant="subtitle1">
            {period}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              marginTop: 1
            }}
          >
            {slots.map((time) => (
              <Button
                key={time}
                variant={
                  selectedTime === time
                    ? "contained"
                    : "outlined"
                }
                onClick={() => setSelectedTime(time)}
                disabled={!selectedDate}
              >
                {time}
              </Button>
            ))}
          </Box>

        </Box>
      ))}

      {/* Confirm Booking */}
      <Button
        variant="contained"
        sx={{ marginTop: 3 }}
        onClick={handleBooking}
      >
        Confirm Booking
      </Button>

    </Box>
  )}

</CardContent>

  </Card>
);
}
