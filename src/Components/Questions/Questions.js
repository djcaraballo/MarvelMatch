import React from 'react'
import PropTypes from 'prop-types'

const Question = (props) => {
  return (
    <h2 className="question">{props.text}</h2>
  )
}

Question.propTypes = {
  text: PropTypes.string
}

export default Question