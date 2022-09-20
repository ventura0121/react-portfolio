import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import Social from './Social'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h4>Hello I'm</h4>
            <h1>Felipe Ventura</h1>
            <h3 className="text-light">Full Stack Developer</h3>
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