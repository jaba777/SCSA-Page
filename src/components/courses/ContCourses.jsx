import React, { useState } from 'react'
import CoursesInput from './CoursesInput'
import Coursetitle from './Coursetitle'
import './ContCourses.css'

const ContCourses = () => {
  const [course, setCourse] = useState(true);
  const courseChangeHandler=()=>{
    setCourse(false);
  }

  

  return (
    <div className='Contcourser-container'>
      <div className='input-cont'>
        {
            course && <div className='container-btn'><button onClick={courseChangeHandler} className='course-btn'>Click</button></div>
        }
        
        {
            !course && <CoursesInput />
        }
        
      </div>
      
      <Coursetitle />
    </div>
  )
}

export default ContCourses
