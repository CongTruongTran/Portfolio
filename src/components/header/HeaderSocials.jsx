import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFacebook} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/congtruongtran22/" target='_black'> <BsLinkedin /> </a>
        <a href="https://github.com/CongTruongTran" target='_black'><FaGithub /></a>
        <a href="https://www.facebook.com/ctr.tran.18/" target='_black'><SiFacebook /></a>
    </div>
  )
}

export default HeaderSocials