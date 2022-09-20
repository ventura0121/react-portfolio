import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href = "#" className ="footer__logo">Felipe's Portfolio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Experience</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/felipe.emmanuel.ventura/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/fventura16/"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; {new Date().getFullYear()} VENTURA. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer