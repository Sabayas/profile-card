import React from 'react'
import profile_pic from '../assets/profile-pic.jpg'
import  '../Component/Card.css'

const Card = () => {
  return (
    <div className='Card'>
      <div className="card1">
        <img className='card-img' src={profile_pic} alt="" />
        <p className='card-p'>Hey, I'm a frontend developer with technical expertise
        Frontend Developer Technical Skills: HTML, CSS, Javascript, React, Tailwind, JQuery, Bootstrap
        </p>
        <div className="box1">
        <h5 className='box' style={{background:"#001A6E"}}>HTML+CSS</h5>
        <h5 className='box' style={{background:"#001A6E"}}>Javascript</h5>
        <h5 className='box'style={{background:"#074799"}}>jQuery</h5>
        <h5 className='box' style={{background:"#FBB4A5"}}>Bootstrap</h5>
        </div>
        </div>
      
    </div>
  )
}

export default Card
