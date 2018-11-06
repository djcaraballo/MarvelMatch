import React from 'react'
import { NavLink } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <h1 className="marvel">MARVEL</h1>
        <h2 className="match">MATCH</h2>
      </div>
      <img className="gif" src="../../assets/Images/comic-flip.gif" alt=""/>
      <div className="links-container">
        <NavLink 
          to='/quiz-land'
          className='landing-nav'>
          <h3>Take the quiz!</h3>
        </NavLink>
      </div>
      <footer>
        <p>"Data provided by Marvel. © 2014 Marvel"</p>
      </footer>
    </div>
  )
}

export default LandingPage