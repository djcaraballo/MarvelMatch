import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
// import { Cleaner } from '../Utils/Cleaners/'
import * as Cleaner from '../Utils/Cleaners/'
import NewHeroSignupForm from '../Components/NewHeroSignupForm/NewHeroSignupForm'
import QuizInstructions from '../Components/QuizInstructions'

class App extends Component {

  async componentDidMount() {
    const cleanData = await Cleaner.getCharacterData()
    console.log(cleanData)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NewHeroSignupForm />
          <QuizInstructions />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
