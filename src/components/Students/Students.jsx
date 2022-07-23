import React from 'react'
import './Students.css'
import Sdata from './Sdata'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation,Autoplay } from "swiper";

const Students = () => {
    const Studcont=Sdata;

  return (
    <div className='Students-Container'>
      <h1>რას ამბობენ კურსდამთავრებულები ?</h1>

      <div className='students'>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation,Autoplay]}
        className="mySwiper"
      >

        {
            Studcont.map((item,index)=>{
                return(
               <SwiperSlide key={index}>
                   <div className='student-cont'>
                <div className="student-box">
                    <div className="image">
                        <img src={item.image} alt='' />
                    </div>
                    <div className="spans">
                        <span><b>{item.name}</b></span> <br />
                        <span className='aqua' style={{color: 'aqua'}}>კურსდამთავრებული</span>
                    </div>
                </div>

                    <div className='student-text'>
                        <p>{item.desc}</p>
                    </div>


                    </div>
               </SwiperSlide>
       
                )
            })
        }
        </Swiper>


      </div>

    </div>
  )
}

export default Students
