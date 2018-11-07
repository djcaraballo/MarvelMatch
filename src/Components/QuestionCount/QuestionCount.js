import React from 'react'
import PropTypes from 'prop-types'
import './QuestionCount.css'

const QuestionCount = ({ counter, total }) => {
  return (
    <div className="question-count">
      <h6>Question <span>{counter}</span> of <span>{total}</span></h6>
    </div>
  )
}

QuestionCount.propTypes = {
  counter: PropTypes.number,
  total: PropTypes.number
}

export default QuestionCount
