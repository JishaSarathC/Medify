import React from "react";

import DoctorImage from "../../assets/Doctor.png";
import LabsImage from "../../assets/Drugstore.png";
import HospitalImage from "../../assets/Hospital.png";
import Capsule from "../../assets/Capsule.png";
import Ambulance from "../../assets/Ambulance.png";

import SearchCountry from "../SearchCountry/SearchCountry";
import "./SearchCity.css";

export default function SearchCity() {
  const icons = [
    { image: DoctorImage, title: "Doctors" },
    { image: LabsImage, title: "Labs" },
    { image: HospitalImage, title: "Hospitals", active: true },
    { image: Capsule, title: "Capsule" },
    { image: Ambulance, title: "Ambulance" }
  ];

  return (
    <div className="search-container">
      <SearchCountry />

      <div className="looking-section">
        <p className="para">You may be looking for</p>

        <div className="icons">
          {icons.map((icon, index) => (
            <div
              className={`icon-card ${icon.active ? "active" : ""}`}
              key={index}
            >
              <img
                className="icon"
                src={icon.image}
                alt={icon.title}
              />
              <p>{icon.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}