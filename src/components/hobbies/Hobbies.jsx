/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Hobbies.css'
import {BiDumbbell} from 'react-icons/bi'
import {BiRestaurant} from 'react-icons/bi'
import {MdSportsSoccer} from 'react-icons/md'
import {FaHiking} from 'react-icons/fa'
import {CgGames} from 'react-icons/cg'
import {FaSnowboarding} from 'react-icons/fa'
import Hiking from '../../assets/Hiking.JPG'
import Penta from '../../assets/Penta.png'
import Book from '../../assets/Book.jpg'
import Anime from '../../assets/Anime.jpg'
import Snowboard from '../../assets/Snowboard.JPEG'
import Bowling from '../../assets/Bowling.jpg'


const Hobby = () => {
  return (
    <section id ="hobbies">
      <h4>Some Of My</h4>
      <h2>Hobbies</h2>

      <div className="hobbies__container">
        <div className="hobbies__me">
          <div className="hobbies__me-image">
            <img className="single__image" src={Hiking} alt="About Image" />
            <img className="single__image" src={Snowboard} alt="About Image" />
            <img className="single__image" src={Bowling} alt="About Image" />
            <img className="single__image" src={Penta} alt="About Image" />
            <img className="single__image" src={Book} alt="About Image" />
            <img className="single__image" src={Anime} alt="About Image" />
          </div>  
        </div>    

        <div className='hobbies__content'>
            <p className="hobbies__info">
              I am constantly learning new skills and taking on new challenges. I get satisfaction from failure because I know I am one step closer to achieving anything I set my mind to. 
            </p>
          <div className="hobbies__cards">
            <article BiDumbbell className="hobbies__card">
              <h3>
                <BiDumbbell className='hobbies__icon'/>
                <FaSnowboarding className='hobbies__icon'/>
                <BiRestaurant className='hobbies__icon'/>
              Hobbies
                <FaHiking className='hobbies__icon'/>
                <MdSportsSoccer className='hobbies__icon'/>
                <CgGames className='hobbies__icon'/>
              </h3>
              <medium className="hobby__list"> 
                <ul>Weight Lifting</ul>
                <ul>Cooking/Eating</ul>
                <ul>Hiking</ul>
                <ul>Personal Finance</ul>
                <ul>Credit Card Rewards</ul>
                <ul>Boxing</ul>
                <ul>Playing Soccer</ul>
                <ul>Snow Boarding</ul>
                <ul>Salsa Dancing</ul>
                <ul>League of Legends (ADC Main)</ul>
                <ul>Anime</ul>
              </medium>
            </article>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Hobby