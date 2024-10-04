import React from 'react'
import './About.css'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

function About({setPlayState}) {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img } alt="" className='about-img'/>
            <img src={play_icon } alt="" className='play-icon' onClick={()=>{
               {setPlayState(true)}
            }}/>
        </div>

        <div className='about-right'>
           <h3>ABOUT UNIVERSITY</h3>
           <h2> Nurturing Tomorrow's Leaders Today</h2>
           <p>Embark on a transformative educational journey with your university's comperhensive education program. Our cutting-edge curriculum is designed to empower student with the knowledge,skill,and experciences needed to excel in the dynamic field of education.</p>
           <p>With a focus on innovation, hands-on learning, and personalized mentorship, our program prepare aspiring educator to make a meaningful impact in classrooms, school, and communities.</p>
           <p> Whether you aspire to become a teacher, administrator,counselor, or educational leader, our diverse range of programs offer the perfect pathway to achieve your goal and unlock your full potential in shaping the future of education.</p>
        </div>

    </div>
  )
}

export default About