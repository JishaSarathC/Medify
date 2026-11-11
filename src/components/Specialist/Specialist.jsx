import DAhmedImg from "../../assets/Ahmad.png";
import DHeenaImg from "../../assets/Heena.png";
import DAnkurImg from "../../assets/Ankur.png";
import LesleyImg from "../../assets/LesleyImg.png";
import AhmadstevensImg from "../../assets/AhmadstevensImg.png";

import { Swiper,SwiperSlide } from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Specialist.css";

export default function Specialist(){
     const doctor=[
        {image: DAhmedImg , title:"Dr.Ahmad Khan",
          specialisation:"Neurologist"
        },
        {image: DHeenaImg, title:"Dr.Heena Sachdeva",
          specialisation:"Orthopedics"
        },
        {image: DAnkurImg, title:"Dr.Ankur Sharma",
          specialisation:"Medicine"
        },
         {image: LesleyImg , title:"Dr.Lesley Hull",
          specialisation:"Medicine"
         },
      
        {image: AhmadstevensImg, title:"Dr.Ahmad Stevens",
          specialisation:"Neurologist"
        }
        
     ];
    return(
     
        <div className="containerspe">
            <h2>Our Medical Specialist</h2>
    <Swiper
       className="myswiper"
    modules={[Pagination]}
    pagination={{ clickable: true,
      dynamicBullets:true
     }}
    slidesPerView={4}
    spaceBetween={10}
    centeredSlides={true}
    loop={false}
       breakpoints={{
    0: {
        slidesPerView: 1.5,
        spaceBetween: 10
    },
    600: {
        slidesPerView: 2.5,
        spaceBetween: 10
    },
    900: {
        slidesPerView: 4,
        spaceBetween: 10
    }
}}
      >
            
         {doctor.map((icons,index)=>(
            <SwiperSlide key={index}>
              <div className="dricons">
              <img  className={`icondoct ${index >= 3 ? "transparent-bg" : ""}`}
    src={icons.image}
    alt={`ico-${index}`}/>
              <p className="drname">{icons.title}</p>
              <p className="drspecialise">{icons.specialisation}</p>
              </div>
              </SwiperSlide>
            ))}
              
              </Swiper>
        </div>

    );
}