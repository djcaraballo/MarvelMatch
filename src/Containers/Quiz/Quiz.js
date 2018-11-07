import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import QuizContainer from '../../Components/QuizContainer/QuizContainer'
import quizQuestions from '../../Utils/API/quizQuestions'
import Result from '../../Components/Result/Result'

export class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        blue: 0,
        brown: 0,
        green: 0,
        other: 0,
        blond: 0,
        black: 0,
        red: 0,
        auburn: 0,
        alternate: 0,
        human: 0,
        alien: 0,
        spirit: 0,
        mutant: 0,
        cyborg: 0
      },
      result: ''
    }
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers
    })
  }

  handleAnswerSelected = (e) => {
    this.setUserAnswer(e.target.value)
    if(this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 400)
    } else {
      setTimeout(() => this.setResults(this.getResults()), 400)
    }
  }

  setUserAnswer(answer) {
    this.setState({
      answersCount: {
        ...this.state.answersCount, 
        [answer]: this.state.answersCount[answer]+=1
      },
      answer: answer
    })
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
    const answersCountValues = answersCountKeys.map(key => answersCount[key])
    const possibleResults = this.props.characters.filter((character) => {
      answersCountKeys.forEach((key) => {
        if(character.appearance.hairColor && key === character.appearance.hairColor.toLowerCase() && answersCount[key] !== 0) {
          character.matchTally++
        } else if(character.appearance.eyeColor && key === character.appearance.eyeColor.toLowerCase() && answersCount[key] !== 0) {
          character.matchTally++
        } else if(character.appearance.race && key === character.appearance.race.toLowerCase() && answersCount[key] !== 0) {
          character.matchTally++
        }
      })
      return character.matchTally !== 0
    })
    return possibleResults
  }

  setResults(result) {
    const index = Math.floor(Math.random() * Math.floor(result.length))
    if (result.length >= 1) {
      this.setState({ result: result[index].name })
    } else {
      this.setState({ result: 'Undetermined' })
    }
  }

  handleCharacterMatch = () => {
    const charMatch = this.props.characters.find((character) => {
      return character.name === this.state.result
    })
    return charMatch
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
    const charMatch = this.handleCharacterMatch()
    return (
      <Result 
        quizResult={this.state.result}
        characterMatch={charMatch} 
      />
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

export const mapStateToProps = state => ({
  characters: state.characters
})

Quiz.propTypes = {
  characters: PropTypes.array
}

export default connect(mapStateToProps, null)(Quiz)
