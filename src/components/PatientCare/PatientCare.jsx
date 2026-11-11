import React from 'react';
import pimage from "../../assets/patient1.png";
import pimage1 from "../../assets/patient2.png";
import patient from "../../assets/patient.png";
import logo1 from "../../assets/svg.h2d-208731fd.png";

import "./PatientCare.css";

export default function PatientCare() {
  
       const images=[patient,pimage,pimage1];
    const content={
        tagline:"HELPING PATIENTS FROM AROUND THE GLOBE!!",
        title:"Patient",
        highlight:"Caring",
        description:`Our goal is to deliver quality of care in a courteous, respectful,and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.`,
        features: [
          {icon: logo1, text:"Stay Updated About Your Health"},
          {icon: logo1, text:"Check Your Results Online"},
          {icon: logo1, text:"Manage Your Appointments"}
        ]
       };
       
  return (
    <div className="patcontainer">

    <div className="carecontainer">
        <div className="imageWrapper">
      <img className="pat1" src={images[0]} alt="Patient Care"/> 
     <img className="pat2" src={images[1]} alt="Patient consultation"/>
     <img className="pat3" src={images[2]} alt="Healthcare support"/>
    
    </div>
    <div className="helpcontainer">
      <p className="tag">{content.tagline}</p>
      <h1>{content.title} <span className="title4">{content.highlight}</span></h1>
      <p>{content.description}</p>
      
      { content.features.map((item,index)=>(
       
      <div className="text1" key={index}>
        <img src={item.icon} alt=""/>
        <p>{item.text}</p>
        </div>
      
        ))}
        
        </div>
    </div>
    </div>

  )
}
