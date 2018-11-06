import React from 'react'
import PropTypes from 'prop-types'
import Question from '../Questions/Questions'
import QuestionCount from '../QuestionCount/QuestionCount'
import AnswerOption from '../AnswerOption/AnswerOption'

const QuizContainer = (props) => {
  const renderAnswerOptions = (key) => {
    return (
      <AnswerOption
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          answer={props.answer}
          questionId={props.questionId}
          onAnswerSelected={props.onAnswerSelected}
      />
    )
  }

  return (
    <div className='quiz-container'>
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      />
      <Question text={props.question} />
      <ul className='answer-options'>
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  )
}

QuizContainer.propTypes = {
  answer: PropTypes.string,
  answerOptions: PropTypes.array,
  counter: PropTypes.number,
  question: PropTypes.string,
  questionId: PropTypes.number,
  questionTotal: PropTypes.number,
  onAnswerSelected: PropTypes.func
}

export default QuizContainer


