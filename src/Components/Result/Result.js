import React from 'react'
import PropTypes from 'prop-types'
import './Result.css'

const Result = ({ quizResult, characterMatch }) => {
  return (
    <div className='result'>
      <h1 className="match-heading">You match with...</h1>
      <h2 className="match-name">{quizResult}</h2>
      <img src={characterMatch.imageURL} alt={characterMatch.name}/>
      <p className="char-description">{characterMatch.description}</p>
      <ul className="bar-graph">
        <li className="red">Intelligence: {characterMatch.powerstats.intelligence}</li>
        <li className="orange">Strength: {characterMatch.powerstats.strength}</li>
        <li className="yellow">Speed: {characterMatch.powerstats.speed}</li>
        <li className="green">Durability: {characterMatch.powerstats.durability}</li>
        <li className="blue">Power: {characterMatch.powerstats.power}</li>
        <li className="violet">Combat: {characterMatch.powerstats.combat}</li>
      </ul>
    </div>
  )
}

Result.propTypes = {
  quizResult: PropTypes.string
}

export default Result
