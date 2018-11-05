import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UserLoginForm.css'

export class UserLoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  render() {
    const { email, password } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="email-input-login"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Enter email address"
        />
        <input
          className="password-input-login"
          name="password"
          value={password}
          onChange={this.handleChange}
          type="password"
          placeholder="Enter password"
        />
        <button className="login-button">Log In!</button>
      </form>
    )
  }
}

export const mapStateToProps = (state) => {
  user: state.user
}

export const mapDispatchToProps = (dispatch) => {
  userSignIn: user => {
    dispatch(signInUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginForm)