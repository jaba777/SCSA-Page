import React, { useState } from 'react'
import Headerstyle from './Header.module.css';
import logo from '../../Images/logo.png'

const Header = () => {
    const [menuIcon, SetMenuIcon] = useState(true);
    const iconChangeHandler=()=>{
        SetMenuIcon(!menuIcon);
    }
  return (
    <header className={Headerstyle.header}>
      <div className={Headerstyle.img}>
        <img src={logo} alt="logo" />
      </div>
      <div className={Headerstyle.menu}>
        <ul className={!menuIcon && Headerstyle.hidden}>
            <li>სპეციალიზაცია</li>
            <li>როგორ მუშაობს</li>
            <li>სასწავლო კურსები</li>
            <li>ლექტორები</li>
            <li>სერტიფიკატი</li>
        </ul>
      </div>
      <span onClick={iconChangeHandler} className={Headerstyle.menuicons}>
            {
                menuIcon ? <i className="fa-solid fa-bars"></i> : <i className="fas fa-times"></i>
            }
        
        </span>
        <span className={Headerstyle.registr}>რეგისტრაცია</span>
    </header>
  )
}

export default Header
