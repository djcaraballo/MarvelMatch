import React from 'react'
import { Route }
import './ErrorPage.css'
import Home from '../Home/Home'

const ErrorPage = () => {
  return (
    <div>
      <Route path='/Home' component={HomePage} />
      <h1>404: Page Not Found!</h1>
      <h2>I AM GROOT!</h2>
      <h4>Translation: Not quite sure where you were headed, but this path leads to Knowhere and you'll never survive the trip!</h4>
    </div>
  )
}