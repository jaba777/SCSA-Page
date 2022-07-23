import React,{useState} from 'react'

const CoursesInput = (props) => {
    const [userInput, setUserInput]=useState({
        name: '',
        lector: 'მაქსიმ იავიჩი',
        desc: ''
    });
    
    
    
    const nameChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            name: event.target.value
        })
    }

    const lectorsChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            lector: event.target.value
        })
    }

    const descChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            desc: event.target.value
        })
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        
        const objfit={
            id: Math.random(),
            names: userInput.name,
            lector: userInput.lector,
            describe: userInput.desc
        }
        
        props.addSelect(objfit);
        
        setUserInput({
            name: '',
            lector: '',
            desc: ''
        })
    }

  return (
    <>
    <form onSubmit={onSubmitHandler}>
    <div className="inputs">
        <div>
        <label htmlFor="Course">Course Name: </label>
        <input value={userInput.name} onChange={nameChangeHandler} type="text" id='Course' />
        </div>
        
        <div>
        <label htmlFor="lectors">Lectors: </label>
          <select name="lectors" id="lectors" onChange={lectorsChangeHandler}>
            <option value="მაქსიმ იავიჩი">მაქსიმ იავიჩი</option>
            <option value="გიორგი იაშვილი">გიორგი იაშვილი</option>
            <option value="დავით ტალიაშვილი">დავით ტალიაშვილი</option>
            <option value="დავით ბოჭორიშვილი">დავით ბოჭორიშვილი</option>
            <option value="თემური თაკალანძე">თემური თაკალანძე</option>
          </select>
        </div>

        <div className='textarea'>
        <label htmlFor="Description">Description: </label>
        <textarea value={userInput.desc} onChange={descChangeHandler} type="text" id='Description'  />
        </div>

    </div>
    <div className='btn-div'>
      <button type='submit' className='forms-btn'>Submit</button>
    </div>

</form>
    </>
  )
}

export default CoursesInput
