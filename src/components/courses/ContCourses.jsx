import React, { useState } from 'react'
import CoursesInput from './CoursesInput'
import Coursetitle from './Coursetitle'
import './ContCourses.css'

const ContCourses = () => {
  const [course, setCourse] = useState(true);
  const courseChangeHandler=()=>{
    setCourse(false);
  }
    const [express, setExpress]=useState([]);

  const addExpenseHandler=(item)=>{
    console.log(express);
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
