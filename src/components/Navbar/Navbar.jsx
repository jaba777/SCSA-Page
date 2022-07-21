import React from 'react'
import './Navbar.css';
import Ndata from './Ndata';

const Navbar = () => {
    const Ndatamassive=Ndata;
  return (
    <div className='Navbar'>
      <div className='navbar-box1'>
        <h1>სპეციალიზაციის შესახებ</h1>
        <p>კიბერ უსაფრთხოების სპეციალიზაცია წარმოადგენს დღეისთვის აქტუალური საგნების სრულყოფილ სასწავლო პროგრამას. სპეციალიზაციის გავლის შემდეგ, მონაწილეებს  ექნებათ შესაძლებლობა და ყველა საჭირო უნარი იმისათვის, რომ პროფესიონალურ დონეზე გააგრძელონ მუშაობა ისეთი მოთხოვნადი მიმართულებით, როგორიც არის კიბერ უსაფრთხოება და კომპიუტერული მეცნიერება. სრული პროგრამის ხანგრძლივობა შეადგენს 12 თვეს.</p>
        <h2>რას ისწავლით</h2>
        <ul className='learn-menu'>
            <li><span><i class="fas fa-check"></i></span> კიბერ უსაფრთხოების ძირითად ასპექტებს</li>
            <li><span><i class="fas fa-check"></i></span> ქსელური უსაფრთხოების ასპექტებს</li>
            <li><span><i class="fas fa-check"></i></span> აპარატულ უსაფრთხოებას</li>
            <li><span><i class="fas fa-check"></i></span> კრიპტოგრაფიის ასპექტებს</li>
            <li><span><i class="fas fa-check"></i></span> დესკტოპ და ვებ აპლიკაციების შექმნას</li>
            <li><span><i class="fas fa-check"></i></span> ვებ უსაფრთხოებას</li>
            <li><span><i class="fas fa-check"></i></span> პროგრამული უზრუნველყოფის უსაფრთხოებას</li>
            <li><span><i class="fas fa-check"></i></span> ქსელური ინფრასტრუქტურის პრინციპებს</li>
            <li><span><i class="fas fa-check"></i></span> ქსელური უსაფრთხოების პრინციპებს</li>
            <li><span><i class="fas fa-check"></i></span> შეღწევადობის ტესტირებას</li>
        </ul>
      </div>

    <div className="navbar-box-container">
        {
        Ndatamassive.map((item,index)=>{
                return(
        <div className='navbar-box' key={index}>
            <div className="navbar-image">
                <img src={item.img} alt={item.title} />
            </div>
            <div className='box-info'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        </div>
                )
    })
        }
        
    </div>

    </div>
  )
}

export default Navbar
