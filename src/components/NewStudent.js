import NewStudentInput from './NewStudentInput'

import React, {Component} from 'react'

export default class NewStudent extends Component {
  render() {
    return (
      <form className="form" action="/students" method="POST">
        <NewStudentInput
          fieldName="firstName"
          fieldLabel="First Name"
          validator={this.validateTwoCharacterString}
          errorMessage="First name is required and must be at least 2 characters"
        />
        <NewStudentInput
          fieldName="lastName"
          fieldLabel="Last Name"
          validator={this.validateTwoCharacterString}
          errorMessage="Last name is required and must be at least 2 characters"
        />
        <NewStudentInput fieldName="dob" fieldLabel="Date of Birth" validator={this.validateDateOfBirth}/>
        <button className="small-3 columns" type="submit">Submit</button>
      </form>
    )
  }

  validateTwoCharacterString(string) {
    if(string.length >= 2) {
      return true
    }

    return false
  }

  validateDateOfBirth(dob) {
    return true
  }
}
