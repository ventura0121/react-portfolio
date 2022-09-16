import React from 'react'
import './About.css'
import Construction from '../../assets/Construction.jpg'
import {FaHardHat} from 'react-icons/fa'
import {TbCertificate} from 'react-icons/tb'
import {AiOutlineCode} from 'react-icons/ai'

const About = () => {
  return (
    <section id ="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Construction} alt="About Image" />
          </div>  
        </div>    

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <FaHardHat className='about__icon'/>
              <h4>Experience</h4>
              <small> 1+ Year Coding Fun Projects 
                <br></br>3+ Years in the Construction Industry </small>
            </article>
            <article className="about__card">
              <TbCertificate className='about__icon'/>
              <h4>Education</h4>
              <small> General Assembly Software Engineering Immersive
              <br></br>B.S. Civil Engineering from New Jersey Institute of Technology </small>
            </article>
            <article className="about__card">
              <AiOutlineCode className='about__icon'/>
              <h4>Technologies Learned</h4>
              <small> JavaScript | HTML | CSS | Git/Github | APIs | React.js | Node.js | Python | Django | MongoDB | PostgreSQL | Express | MERN | VS Code | CLI | </small>
              
            </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur error nobis unde enim eum excepturi, ipsa, in, expedita obcaecati a fugiat dicta! Reiciendis nulla minima, nemo possimus blanditiis repellendus cupiditate!
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>

    </section>
  )
}

export default About