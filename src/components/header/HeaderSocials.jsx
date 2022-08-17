import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFacebook} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linked.com" > <BsLinkedin /> </a>
        <a href="https://github.com" ><FaGithub /></a>
        <a href="https://facebook.com"><SiFacebook /></a>
    </div>
  )
}

export default HeaderSocials