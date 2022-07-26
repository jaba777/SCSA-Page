import React, { useState } from 'react'
import CoursesInput from './CoursesInput'
import Coursetitle from './Coursetitle'
import './ContCourses.css'

const ContCourses = () => {
  const [course, setCourse] = useState(true);
  const courseChangeHandler=()=>{
    setCourse(false);
  }
    const [express, setExpress]=useState([
      {
            id: Math.random(),
            names: 'პროგრამირება Python - ზე',
            lector: 'მაქსიმ იავიჩი',
            describe: 'სასწავლო კურსი წარმოადგენს დაპროგრამების მიმართულებით თანამედროვე სტანდარტების თეორიული და პრაქტიკული გამოყენების ათვისების საშუალებას. მასში შეისწავლება თანამედროვე, დინამიური და მულტიპარადიგმული ენა „პითონი“. რომელიც თავის თავში მოიცავს ობიექტზე ორინეტირებულ , პროცედურულ, ფუნქციონალურ და იმპერატიულ პროგრამირებას.'
      },
    ]);

  const addExpenseHandler=(item)=>{
    
    setExpress([...express,item]);
    
  }
  

  return (
    <div className='Contcourser-container'>
      <div className='input-cont'>
        {
            course && <div className='container-btn'><button onClick={courseChangeHandler} className='course-btn'>Click</button></div>
        }
        
        {
            !course && <CoursesInput addSelect={addExpenseHandler} />
        }
        
      </div>
      <div className='Course-container'>
        <h1>სპეციალიზაციის სასწავლო კურსები</h1>
        {
            express.map((item, ind)=> {
                return(
                       <Coursetitle name={item.names} lector={item.lector} desc={item.describe} number={ind} key={item.id} />
                )
            }
          )
        }
      
      </div>
      
    </div>
  )
}

export default ContCourses
