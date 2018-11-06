import React from 'react'
import PropTypes from 'prop-types'

const AnswerOption = (props) => {
  const { answerType, answerContent, answer, onAnswerSelected } = props
  return (
    <li>
      <input
        type='radio'
        className='radio-button'
        name='radio-group'
        checked={answerType === answer}
        id={answerType}
        value={answerType}
        disabled={answer}
        onChange={onAnswerSelected}
      />
      <label className='radio-label' htmlFor={answerType}>
        {answerContent}
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

