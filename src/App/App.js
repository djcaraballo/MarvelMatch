import React, { Component } from 'react';
import './App.css';
import * as Cleaner from '../Utils/Cleaners/'
import NewHeroSignupForm from '../Components/NewHeroSignupForm/NewHeroSignupForm'
import QuizInstructions from '../Components/QuizInstructions/QuizInstructions'
import LandingPage from '../Components/LandingPage/LandingPage'

class App extends Component {

  async componentDidMount() {
    const cleanData = await Cleaner.getCharacterData()
    console.log(cleanData)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<NewHeroSignupForm />*/}
          {/*<QuizInstructions />*/}
          <LandingPage />
        </header>
      </div>
    );
  }
}

export default App;
