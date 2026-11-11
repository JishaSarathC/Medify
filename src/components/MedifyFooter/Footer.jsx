import React from 'react' ; 
import footerimg1 from "../../assets/footerimg1.png";
import linksgp1 from "../../assets/linksgp1.png";
import linksgp2 from "../../assets/linksgp2.png";
import linksgp3 from "../../assets/linksgp3.png";
import "./Footer.css";


export default function Footer()  {
  return(
    <div className="footer">
       <div className="footerContainer">
      <div className="footerimg">
        <img className="footerimg1" src={footerimg1} alt="Medify logo" />
      </div>
      
      <div className="footerlinks">
        <img className="linksgp1" src={linksgp1} alt="link1" />
        <img className="linksgp2" src={linksgp2} alt="link2" />
        <img className="linksgp3" src={linksgp3} alt="link3" /> 
      </div>
     
    <div className="footertext">
      <p className="footertext1">Copyright©Surya Nursing Home.com. All rights reserved.</p>
     
    </div>
    </div>
    </div>
  )  
  
  
}
