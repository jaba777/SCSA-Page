import React, { useState } from 'react'

const LectorInput = (props) => {
    
    const inputChangeHandler=(event)=>{
        props.itemFunction(event.target.value);
    }
    
   
  return (
    <form>
      <label htmlFor="lector">Lector Name: </label>
      
      <select name="lectors" id="lector" onChange={inputChangeHandler} >
        <option value="მაქსიმ იავიჩი">მაქსიმ იავიჩი</option>
        <option value="გიორგი იაშვილი">გიორგი იაშვილი</option>
        <option value="დავით ბოჭორიშვილი">დავით ბოჭორიშვილი</option>
        <option value="დავით ტალიაშვილი">დავით ტალიაშვილი</option>
        <option value="არჩილ ჩაგელიშვილი">არჩილ ჩაგელიშვილი</option>
        <option value="თემური თაკალანძე">თემური თაკალანძე</option>
        <option value="გიორგი ახალაია">გიორგი ახალაია</option>
        <option value="სერგო სიმონოვი">სერგო სიმონოვი</option>
      </select>

    </form>
  )
}

export default LectorInput
