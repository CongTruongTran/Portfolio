// viet tat rafce  => tu tim cach di nao => ES7+

import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>


      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>trancongtruong240401@gmail.com</h5>
            <a href="mailto:trancongtruong240401@gmail.com" target={'_blank'}>Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Tran Cong Truong</h5>
            <a href="https://m.me/congtruong.tran.18" target={'_blank'}>Send a message</a>
          </article>

          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0762780603</h5>
            <a href="https://api.whatsapp.com/send?phone+0762780603" target={'_blank'}>Send a message</a>
          </article>
        </div>

        {/* end of contact */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea type="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact