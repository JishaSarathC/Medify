import React from 'react';
import NewsImage from "../../assets/detox.png";
import "./News.css";

export default function News() {
    const newsitem=[NewsImage,NewsImage,NewsImage];

      return (
    <div className="newscontainer"> <span id="blog">Blog & News</span>
        <h1>Read Our latest News</h1>
        <div className="newsCards">
        {newsitem.map((news,index)=>(
          <img className="detox" key={index} src={news} alt="Healthcare news" />
        ))}
       </div> 
    </div>
    
  )
}
