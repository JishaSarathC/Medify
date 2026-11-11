import React from 'react';
import HealthImage from "../../assets/Health.png";
import HealthIconImage from '../../assets/HealthIcon.png';
import HappyIconImage from "../../assets/HappyHealth.png";
import addImage from"../../assets/add.png";
import "./HealthCare.css";

export default function HealthCare() {
  const healimages=[HappyIconImage,HealthImage, HealthIconImage];
  const healthcontent={
    features:[
      {text:"Why choose our medical for your family",icon:addImage},
      {text:"Why we are different from others", icon:addImage},
      {text:"Trusted & experienced senior care & love",icon:addImage},
      {text:"How to get appointment for emergency cases", icon:addImage}
    ]
  }
  return (
    <div className="healthcontainer">
        <p className="getanswer">Get Your Answer </p>
        <h2>Frequently Asked Questions</h2>
        <div className="hcarecontainer">
        <div className="familycontainer">
          <img className="heal1" src={healimages[0]} alt="" />
          <img className="heal2" src={healimages[1]} alt="" />
          <img className="heal3" src={healimages[2]} alt="" />

           </div>
           <div className="qcontainer">
            {healthcontent.features.map((item,index)=>(
              <div key={index}>
                <div className="health">
                  <p>{item.text}</p>
                  <img src={item.icon} alt="Expand"/>
                  </div>
               </div> 
            ))}

           </div>
            </div>
            </div>
  )
}
