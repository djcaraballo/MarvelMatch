import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="logo-container">
      <h1 className="marvel">MARVEL</h1>
      <h2 className="match">MATCH</h2>
      <img className="gif" src="../../assets/comic-flip.gif"/>
      <div className="links-container">
        <h3>login</h3>
        <p><span className="line-span"></span>OR<span className="line-span"></span></p>
        <h3>signup</h3>
      </div>
    </div>
  )
}

export default LandingPage