import React from 'react'
import './Portfolio.css'
import Soon from '../../assets/Soon.png'
import Project1 from '../../assets/Project1.png'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'

const data =[
  {
    id:1, 
    image: Project1,
    title: 'BookNook - A MERN Stack CRUD app used to save and rate study spots',
    github: "https://github.com/Snapdragons-Mars",
    demo: "https://book-nooks.netlify.app/"
  },

  {
    id:2, 
    image: Project2,
    title: "Milano's Masonry Website - See company's info, services, and more ",
    github:"https://github.com/ventura0121/Milanos",
    demo: "https://milanosmasonry.netlify.app/"
  },

  {
    id:3, 
    image: Project3,
    title: 'Calorie Meal Generator - Meet your caloric needs using this app',
    github:"https://github.com/ventura0121/Daily-Recipes",
    demo: "https://recipe-generator-fv.netlify.app/"
  },

  {
    id:4, 
    image: Soon,
    title: 'Project 4',
    github: "https://github.com/ventura0121",
    demo:  "https://media.giphy.com/media/840zvMIuYv3ZwXanfN/giphy.gif"
  },

  {
    id:5, 
    image: Soon,
    title: 'Project 5',
    github: "https://github.com/ventura0121",
    demo: "https://media.giphy.com/media/ncU3bkZ5ghDlS/giphy.gif"
  },

  {
    id:6, 
    image: Soon,
    title: 'Project 6',
    github: "https://github.com/ventura0121",
    demo:  "https://media.giphy.com/media/3ohhwu4yGazpjbe2KQ/giphy.gif"
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="card__info">
              <div className="portfolio__item-cta">
                <a href={github} className='btn' targets='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' targets='_blank'>Live Demo</a>
              </div>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio