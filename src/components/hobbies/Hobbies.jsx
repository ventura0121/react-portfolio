import React from 'react'
import './Hobbies.css'
import {BiDumbbell} from 'react-icons/bi'
import {BiRestaurant} from 'react-icons/bi'
import {MdSportsSoccer} from 'react-icons/md'
import {FaHiking} from 'react-icons/fa'
import {CgGames} from 'react-icons/cg'
import {FaSnowboarding} from 'react-icons/fa'
import Construction from '../../assets/Construction.jpg'


const Hobby = () => {
  return (
    <section id ="about">
      <h5>Some Of My</h5>
      <h2>Hobbies</h2>

      <div className="container experience__container">
        <div className="experience__me">
          <div className="experience__me-image">
            <img src={Construction} alt="About Image" />
          </div>  
        </div>    

        <div className='experience__content'>
        <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing eult. Tenetur error nobis unde enim eum excepturi, ipsa, in, expedita obcaecati a fugiat dicta! Reiciendis nulla minima, nemo possimus blanditiis repellendus cupiditate!
            </p>
          <div className="experience__cards">
            <article BiDumbbell className="experience__card">
              <h4>
                <BiDumbbell className='experience__icon'/>
                <FaSnowboarding className='experience__icon'/>
                <BiRestaurant className='experience__icon'/>
              Hobbies
                <FaHiking className='experience__icon'/>
                <MdSportsSoccer className='experience__icon'/>
                <CgGames className='experience__icon'/>
              
              </h4>
              <small> 
                <ul>Weight Lifting</ul>
                <ul>Cooking/Eating</ul>
                <ul>Hiking</ul>
                <ul>Personal Finance</ul>
                <ul>Credit Card Rewards</ul>
                <ul>Boxing</ul>
                <ul>Soccer</ul>
                <ul>Snow Boarding</ul>
                <ul>Salsa Dancing</ul>
                <ul>League of Legends (ADC Main)</ul>
                <ul>Anime</ul>
              </small>
            </article>

            </div>

          
        </div>
      </div>

    </section>
  )
}

export default Hobby