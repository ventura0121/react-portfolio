import React from 'react'
import './About.css'
import Graduation from '../../assets/Graduation.JPG'
import {FaHardHat} from 'react-icons/fa'
import {TbCertificate} from 'react-icons/tb'
import {AiOutlineCode} from 'react-icons/ai'

const About = () => {
  return (
    <section id ="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>
          <p className="about__info">
           Hi there! I am a second generation Latino - the first in my family to go and graduate from college. I graduated with a Bachelor of Science degree in Civil Engineering in 2020 and worked as a project engineer for two years at a construction management company. I completed the General Assembly Software Engineering Immersive program this past summer as I begin my grand entrance in the tech field. Instead of building skyscrapers, I am now building fun coding projects!
          </p>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Graduation} alt="About Image" />
          </div>  
        </div>    

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <FaHardHat className='about__icon'/>
              <h3>Experience</h3>
              <medium> 1+ Year Coding Fun Projects 
                <br></br>3+ Years in the Construction Industry </medium>
            </article>
            <article className="about__card">
              <TbCertificate className='about__icon'/>
              <h3>Education</h3>
              <medium> General Assembly Software Engineering Immersive
              <br></br>B.S. Civil Engineering from New Jersey Institute of Technology </medium>
            </article>
            <article className="about__card">
              <AiOutlineCode className='about__icon'/>
              <h3>Technologies Learned</h3>
              <medium> JavaScript | HTML | CSS | Git/Github | APIs | React.js | Node.js | Python | Django | MongoDB | PostgreSQL | Express | MERN | VS Code | CLI | </medium>
              
            </article>
            </div>

          
        </div>
      </div>

    </section>
  )
}

export default About