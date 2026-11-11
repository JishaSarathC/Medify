import React from 'react' ; 
import Phoneframe1 from "../../assets/PhoneFrame1.png";
import Phoneframe2 from "../../assets/PhoneFrame2.png";
import VectorImage from "../../assets/Vector.png";
import AppImage from "../../assets/apple_store.png";
import GooImage from "../../assets/google_play.png";
import DownloadApp from "../../assets/DownloadApp.png"

import Phonecontent  from "../../assets/Mask group.png";
import "./DownTheApp.css";

export default function DownTheApp()  {
    
  return (
    <div className="contactcontainer">
    <div className="phonecontainer">
    <div className="phone phone1">
  <img className="phoneframe1" src={Phoneframe1} alt="Medify app screen" />
   <img className="phonecontent1" src={Phonecontent} alt="Medify app screen" />
  
 </div>
 <div className="phone phone2">
 <img className="phoneframe2"src={Phoneframe2} alt="Medify app screen"/>
  <img className="phonecontent2" src={Phonecontent} alt="Medify app screen" />
</div>
   </div>
   <div className="appcontent">
    <img className="vectorimage" src={VectorImage} alt="VectorImage" />
    <h2 className="downloadapp" >
      Download the
      <br/>
    <span>Medify</span> App</h2>
     <p className="downloadtext">Get the link to download the app</p>
     <div className="downloadform">
    <div className="phoneinput">
        <span className="countrycode">+91</span>
        <input
            type="tel"
            placeholder="Enter phone number"
        />
    </div>

    <button className="smsbutton" type="button">
        Send SMS
    </button>
</div>
    <div className="appstore">
      
      <img className="gooimage" src={GooImage} alt="GooImage" />  
      <img className="appimage" src={AppImage} alt="AppImage" />
    </div>
   </div>
    </div>
  )
}
