import React from 'react'
import PropTypes from 'prop-types'

const QuestionCount = (props) => {
  return (
    <div className="question-count">
      <h6>Question <span>{props.counter}</span> of <span>{props.total}</span></h6>
    </div>
  )
}

QuestionCount.propTypes = {
  counter: PropTypes.number,
  total: PropTypes.number
}

export default QuestionCount
