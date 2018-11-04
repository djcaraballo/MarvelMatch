import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCharacters } from '../Actions/characterActions';
import './App.css';
import * as Cleaner from '../Utils/Cleaners/'
import NewHeroSignupForm from '../Components/NewHeroSignupForm/NewHeroSignupForm'
import QuizInstructions from '../Components/QuizInstructions/QuizInstructions'
import LandingPage from '../Components/LandingPage/LandingPage'
import ErrorPage from '../Components/ErrorPage/ErrorPage'

export class App extends Component {
  async componentDidMount() {
    const characterData = await Cleaner.cleanCharacterCollection()
    this.props.addCharacters(characterData)
    console.log(characterData)
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/NewHeroSignupForm' component={NewHeroSignupForm} />
            <Route exact path='/QuizInstructions' component={QuizInstructions} />
            <Route path='/' exact component={LandingPage} />
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

const mapStateToProps = (state) => ({
  characters: state.charactersReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacters: characterData => {
      dispatch(addCharacters(characterData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
