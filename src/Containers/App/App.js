import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCharacters } from '../../Actions/characterActions';
import './App.css';
import Cleaner from '../../Utils/Cleaners'
import QuizInstructions from '../../Components/QuizInstructions/QuizInstructions'
import LandingPage from '../../Components/LandingPage/LandingPage'
import ErrorPage from '../../Components/ErrorPage/ErrorPage'
import Quiz from '../Quiz/Quiz'

const cleaner = new Cleaner()

export class App extends Component {
  async componentDidMount() {
    const characterData = await cleaner.combineCharacterObjects()
    this.props.addCharacters(characterData)
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/quiz-land' component={QuizInstructions} />
            <Route exact path='/quiz' component={Quiz} />
            <Route path='/MarvelMatch' exact component={LandingPage} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
        <footer>
          <p>"Data provided by Marvel. © 2014 Marvel"</p>
        </footer>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  characters: state.characters
})

export const mapDispatchToProps = (dispatch) => {
  return {
    addCharacters: characterData => {
      dispatch(addCharacters(characterData))
    }
  }
}

App.propTypes = {
  characters: PropTypes.array,
  addCharacters: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
