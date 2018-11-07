import React from 'react'
import { NavLink } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="error-wrapper">
      <div className='warning-container'>
        <h1>404: I AM GROOT!</h1>
        <p className='translation'>Translation: Not quite sure where you were headed, friend, but this path leads to Knowhere and you'll never survive the trip!</p>
      </div>
      <NavLink to='/quiz-land' className='error-nav'>
        <p className='home-link'>Back to Safety!</p>
      </NavLink>
    </div>
  )
}

export default ErrorPage