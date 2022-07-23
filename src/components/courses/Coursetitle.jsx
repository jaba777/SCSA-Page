import React from 'react'

const Coursetitle = ({name, lector, desc,number}) => {
  
  return (
    <div className='course-titles'>
      <div className='course-title'>
        <h2>კურსი</h2>
        <h2 className='course-number'>{number+1}</h2>
      </div>
      <div className='programming-container'>
        <h3>{name}</h3>
        <p>ლექტორი: <span className='lector-name'>{lector}</span></p>
        <p className='inform'>{desc}</p>
      </div>
    </div>
  )
}

export default Coursetitle
