import React, { useState } from 'react'
import LectorData from './LectorData'
import LectorsTitle from './LectorsTitle'
import LectorInput from './LectorInput'
import './Lectors.css'

const Lectors = () => {
    const [express,setExpress]=useState(LectorData);
    const [lectorExpress,setLectorExpress]=useState('მაქსიმ იავიჩი');

    const lectorExpressHandler=(item)=>{
        setLectorExpress(item);
    }
    const filterFunct=express.filter((item)=>{
        return item.name === lectorExpress;
        
    })
  return (
    <div className='lectors'>

      <h1>ლექტორები</h1>
      <div className="lectorInput">
      <LectorInput itemFunction={lectorExpressHandler} />
      </div>
      <div className='lector-container'>
        {
            filterFunct.map((item,index)=>{
                return(
                  <LectorsTitle name={item.name} desc={item.desc} img={item.image} key={index} /> 
                )
            })
        }
      </div>
    </div>
  )
}

export default Lectors
