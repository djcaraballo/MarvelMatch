import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import * as Cleaner from '../Utils/Cleaners/'
import NewHeroSignupForm from '../Components/NewHeroSignupForm/NewHeroSignupForm'
import QuizInstructions from '../Components/QuizInstructions/QuizInstructions'
import LandingPage from '../Components/LandingPage/LandingPage'
import ErrorPage from '../Components/ErrorPage/ErrorPage'

class App extends Component {

  async componentDidMount() {
    const cleanData = await Cleaner.getCharacterData()
    const cleanCharacterArray = await Cleaner.cleanCharacterCollection()
    const charImage = await Cleaner.getCharacterImage(cleanCharacterArray[0].imageURL)
    console.log(cleanCharacterArray)
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

export default App;
