import React, {Component} from 'react'
import InputField from './InputField.jsx'

import {validateName, validateDate} from '../validations'

export default class NewStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: undefined,
      lastName: undefined,
      dob: undefined
    }
    this.handleValueChanged = this.handleValueChanged.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <form className="form" action="/students" method="POST" onSubmit={this.handleSubmit}>
        <InputField
          label="First Name"
          inputName="firstName"
          validate={validateName}
          handleValueChanged={this.handleValueChanged}
        />
        <InputField
          label="Last Name"
          inputName="lastName"
          validate={validateName}
          handleValueChanged={this.handleValueChanged}
        />
        <InputField
          label="Birthdate"
          inputName="dob"
          validate={validateDate}
          handleValueChanged={this.handleValueChanged}
        />

        <div className="row">
          <button type="submit" disabled={!this.isFormValid()}>Submit</button>
        </div>
      </form>
    )
  }

  handleValueChanged(name, value) {
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.isFormValid()) {
      event.target.submit()
    }
  }

  isFormValid() {
    return validateName(this.state.firstName) &&
    validateName(this.state.lastName) &&
    validateDate(this.state.dob)
  }
}
