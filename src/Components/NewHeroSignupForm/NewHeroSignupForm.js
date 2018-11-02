import React, { Component } from 'react'

class NewHeroSignupForm extends Component {
  constructor(props) {
    super (props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //function that adds to store
    this.setState({
      name: '',
      email: '',
      password: '',
    })
  }

  render () {
    const { name, email, password } = this.state
    return (
      <form 
        className='new-hero-form'
        onSubmit={this.handleSubmit}
      >
        <input
          className='user-name-input'
          name='name'
          title='Enter first and last name'
          value={name}
          onChange={this.handleChange}
          placeholder='Enter first and last name'
        />
        <input
          className='user-email-input'
          name='email'
          title='Enter email address'
          value={email}
          onChange={this.handleChange}
          placeholder='Enter email address' />
        <input
          className='user-password-input'
          type='password'
          name='password'
          title='Enter password'
          value={password}
          onChange={this.handleChange}
          placeholder='Enter password' />
        <button>Match Me!</button>
      </form>
    )
  }
}

export default NewHeroSignupForm