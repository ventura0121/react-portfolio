import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href = "#" className ="footer__logo">VENTURA</a>

      <ul className='permalinks'>
        <li><a href="#"></a>Home</li>
        <li><a href="#about"></a>About</li>
        <li><a href="#portfolio"></a>Experience</li>
        <li><a href="#hobbies"></a>Services</li>
        <li><a href="#contact"></a>Contact</li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; {new Date().getFullYear()} VENTURA. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer