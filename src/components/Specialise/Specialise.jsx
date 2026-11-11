import React from 'react';
import DentistryImg from "../../assets/Drugstore (1).png";
import PrimaryCareImg from "../../assets/Stethoscope.png";
import CardiologyImg from "../../assets/Heart Rate Monitor.png";
import MRIResonanceImg from "../../assets/Heart Rate.png";
import BloodTestImg from "../../assets/Blood Sample.png";
import ImmuneImg from "../../assets/Immune.png";
import LaboratoryImg from "../../assets/Drugstore (2).png";
import XRayImg from "../../assets/X-Ray.png";
import Button from "../Button/Button";
import "./Specialise.css";

export default function Specialise(){
  const medIcon=[
    { image:DentistryImg, title:"Dentistry" },
    { image:PrimaryCareImg , title:"Primary Care"},
    {image:CardiologyImg , title:"Cardiology"},
    { image:MRIResonanceImg, title:"MRI Resonance"},
  ];
  const medIcon1=[
    { image:BloodTestImg, title:"Blood Test"}, 
    { image:ImmuneImg, title:"Psychologist"},
    { image:LaboratoryImg, title:"Laboratory"},
    { image:XRayImg, title:"X-Ray"}
    ];
  
  return (
    <div className="container1">
    <div className="specialise">
      <h3 className="head1">Find By Specialisation</h3>
      <div className="micons">
         {medIcon.map((icon1,index)=>(
            <div className= "icontop" key={index}>
              <img className="iconsp" src={icon1.image} alt={icon1.title}/>
              <p>{icon1.title}</p>
              </div>
            ))}
              </div>
              <div className="mdicons">
                {medIcon1.map((icon2,index)=>(
                  <div  className ="icondown" key={index}>
                    <img className="iconspd" src={icon2.image} alt={icon2.title}/>
                    <p>{icon2.title}</p>
                    </div>
                ))}

              </div>
              <div className="b">
            <Button>View all</Button> 
            </div> 
    </div>
    </div>
  )
}
