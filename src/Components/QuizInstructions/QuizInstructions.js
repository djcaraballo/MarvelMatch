import React from 'react'
import { NavLink } from 'react-router-dom'
import './QuizInstructions.css'

const QuizInstructions = () => {
  return (
    <div>
      <h1 className="directions-title">Take the quiz to find your <span>Spirit Superhero</span>!</h1>
      <div className="directions-container">
        <p className="directions">We all know that no one in real life looks like a Marvel Comics superhero, but we all feel like one inside. Answer the questions in our brief quiz to choose your Spirit Superhero and avatar!</p>

      <NavLink
        to='/quiz'
        className='quiz-nav'>
        <h3>Match Me!</h3>
      </NavLink>
      </div>
    </div>
  )
}

export default QuizInstructions