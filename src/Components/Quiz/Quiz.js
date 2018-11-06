import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QuizContainer from '../QuizContainer/QuizContainer'
import Question from '../Questions/Questions'
import quizQuestions from '../../Utils/API/quizQuestions'
import Result from '../Result/Result'

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        blueEyedHeroes: 0,
        brownEyedHeroes: 0,
        greenEyedHeroes: 0,
        otherColoredEyedHeroes: 0,
        blondeHairedHeroes: 0,
        blackHairedHeroes: 0,
        redHairedHeroes: 0,
        brownHairedHeroes: 0,
        otherHairedHeroes: 0,
        tallHeroes: 0,
        shortHeroes: 0,
        averageHeroes: 0,
      },
      result: ''
      //change to object once everything is working 
    }
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers
    })
  }

  handleAnswerSelected = (e) => {
    this.setUserAnswer(e.currentTarget.value)
    if(this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300)
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300)
    }
  }

  setUserAnswer(answer) {
    this.setState(state => 
      ({
      answersCount: {
        ...state.answersCount,
        [answer]: state.answersCount[answer]++
      },
      answer: answer
    }))
  }

  setNextQuestion() {
    const counter = this.state.counter + 1
    const questionId = this.state.questionId + 1
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    })
  }

  getResults() {
    const answersCount = this.state.answersCount
    const answersCountKeys = Object.keys(answersCount)
    const answersCountValues = answersCountKeys.map((key) => answersCount[key])
    const maxAnswerCount = Math.max.apply(null, answersCountValues)
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount)
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] })
    } else {
      this.setState({ result: 'Undetermined' })
    }
  }

  renderQuizContainer() {
    const { answer, answerOptions, questionId, question } = this.state
    return (
      <QuizContainer 
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    )
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    )
  }

  render () {
    return (
      <div className="quiz-wrapper" key={this.state.questionId}>
        <h1>Take the Quiz and match a Marvel Character!</h1>
        {this.state.result ? this.renderResult() : this.renderQuizContainer()}
      </div>
    )
  }
}

export default Quiz
