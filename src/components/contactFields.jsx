import React, {Component} from 'react'

import InputField from './InputField.jsx'

import {validateName, validateDate} from '../validations'


export default class ContactFields extends Component {
  render() {
    return (
      <div>
        <InputField
          label="First Name"
          inputName="firstName"
          validate={validateName}
          handleValueChanged={this.props.handleValueChanged}
        />
        <InputField
          label="Last Name"
          inputName="lastName"
          validate={validateName}
          handleValueChanged={this.props.handleValueChanged}
        />
        <InputField
          label="Birthdate"
          inputName="dob"
          validate={validateDate}
          handleValueChanged={this.props.handleValueChanged}
        />
      </div>
    )
  }
}
