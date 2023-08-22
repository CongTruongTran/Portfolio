import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>

      <div className="container experience_container">
        
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <div>
                <BsPatchCheckFill  className='experience_details-icon' />
                <h4>HTML</h4>
              </div>
            </article>
            
            <article className='experience_details'>
              <div>
                <BsPatchCheckFill  className='experience_details-icon' />
                <h4>CSS</h4>
              </div>
            </article>
            
            <article className='experience_details'>
              <div>
                <BsPatchCheckFill  className='experience_details-icon' />
                <h4>JAVASCRIPT</h4>
              </div>
            </article>

            <article className='experience_details'>
              <div>
                <BsPatchCheckFill  className='experience_details-icon' />
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
               
          </div>
        </div>

        <div className="experience_backend">

        <h3>Backend Development</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <div>
                <BsPatchCheckFill  className='experience_details-icon' />
                <h4>PHP (Laravel 8.x)</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
              <div>
                <BsPatchCheckFill  className='experience_details-icon' />
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
               
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience