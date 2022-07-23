import React from 'react'

const LectorsTitle = ({name, desc, img}) => {
  return (
    <div className='lector-box'>
      <div className="lector-images">
        <img src={img} alt={name} />
      </div>
      <div className='info-desc'>
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default LectorsTitle
