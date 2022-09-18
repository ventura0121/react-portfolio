/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Social = () => {
  return (
    <div className='social_header'>
        <a href="https://www.linkedin.com/in/felipeventura16/" target ="_blank" rel="noreferrer"><BsLinkedin size={40}/></a>
        <a href="https://github.com/ventura0121" target ="_blank" rel="noreferrer"><FaGithub size={40}/></a>
    </div>
  )
}

export default Social