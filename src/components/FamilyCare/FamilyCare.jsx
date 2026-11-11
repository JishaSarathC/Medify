import React from 'react';
import CardsImage from "../../assets/Families.png";
import "./FamilyCare.css";

export default function FamilyCare() {
      const content={
        tagline:"CARING FOR THE HEALTH OF YOU AND YOUR FAMILY",
        title:"Our Families",
        description:`We will work with you to develop individualised care plans, including management of chronic deseases. if we cannot assist we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.`
      };
  
  return (
    <div className="healthcare">
      <div className="familyhealth">
        <div className="familycare">
       <p className='tag'>{content.tagline}</p>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
        </div>
       <div className="familyimage">
        <img className="cardsimage" src={CardsImage} alt=""/>
       </div>
      </div>
    </div>
  )
}
