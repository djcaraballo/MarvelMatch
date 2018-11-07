import React from 'react'
import PropTypes from 'prop-types'
import './Questions.css'

const Question = ({ text }) => {
  return (
    <h2 className="question">{text}</h2>
  )
}

Question.propTypes = {
  text: PropTypes.string
}

export default Question