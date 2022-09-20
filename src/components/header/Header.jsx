import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import Social from './Social'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Felipe Ventura</h1>
            <h5 className="text-light">Full Stack Developer</h5>
            <CTA />
            <Social />

            <div className='me'>
                <img src ={ME} alt=""/>
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header