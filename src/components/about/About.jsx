
import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2Open} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsAward className='about_icon'/> 
              <h5>Experience</h5>
              <small>0 Year Working</small>
            </article>
            
            <article className='about_card'>
              <FiUsers className='about_icon'/> 
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>

            <article className='about_card'>
              <BsFolder2Open className='about_icon'/> 
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
            
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequatur odit veniam nihil atque enim repellat aliquid voluptate minus, 
            quod quasi repellendus voluptatem dicta commodi eaque tempore explicabo nesciunt dolor cupiditate!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section>
    
  )
}

export default About