import React from 'react'
import PropTypes from 'prop-types'

const AnswerOption = (props) => {
  return (
    <li>
      <input
        type='radio'
        className='radio-button'
        name='radio-group'
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className='radio-label' htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  )
}

AnswerOption.propTypes = {
  answerType: PropTypes.string,
  answerContent: PropTypes.string,
  answer: PropTypes.string,
  onAnswerSelected: PropTypes.func,
}

export default AnswerOption

