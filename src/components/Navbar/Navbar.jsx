import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <div>
      <header className="head">
        <p className="headcolor">
          The health and well-being of our patients and healthcare team will
          always be our priority, so we follow the best practices for cleanliness.
        </p>
      </header>

      <nav className="nav">
        <Link to="/" className="logo-link">
          <Logo />
        </Link>

        <ul className="nav-links">
          <li><a href="#find-doctors">Find Doctors</a></li>
          <li><Link to="/search">Hospitals</Link></li>
          <li><a href="#medicines">Medicines</a></li>
          <li><a href="#surgeries">Surgeries</a></li>
          <li><a href="#software">Software for Provider</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><Link to="/my-bookings">My Bookings</Link></li>
        </ul>

        <Link to="/my-bookings" className="booking-button-link">
          <Button>My Bookings</Button>
        </Link>
      </nav>
    </div>
  );
}