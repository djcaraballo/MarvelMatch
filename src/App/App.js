import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import * as Cleaner from '../Utils/Cleaners/'
import NewHeroSignupForm from '../Components/NewHeroSignupForm/NewHeroSignupForm'
import QuizInstructions from '../Components/QuizInstructions/QuizInstructions'
import LandingPage from '../Components/LandingPage/LandingPage'
import ErrorPage from '../Components/ErrorPage/ErrorPage'

class App extends Component {

  async componentDidMount() {
    const cleanData = await Cleaner.getCharacterData()
    console.log(cleanData)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path='/NewHeroSignupForm' component={NewHeroSignupForm} />
            <Route exact path='/QuizInstructions' component={QuizInstructions} />
            <Route path='/' exact component={LandingPage} />
            <Route component={ErrorPage} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
