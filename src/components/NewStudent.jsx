import React, {Component} from 'react'
import InputField from './InputField.jsx'
import ContactFields from './ContactFields.jsx'
import SelectBox from './SelectBox.jsx'

import {validateName, validateDate, validateRelationship} from '../validations'

export default class NewStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: undefined,
      lastName: undefined,
      dob: undefined,
      guardianRelationship: undefined,
      submitted: false
    }
    this.handleValueChanged = this.handleValueChanged.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
        <form className="form" action="/students" method="POST" onSubmit={this.handleSubmit}>
          <ContactFields
            handleValueChanged={this.handleValueChanged}
            showValidations={this.state.submitted}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            dob={this.state.dob}
          />
          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
        <h1 className="text-center">Add New Guardian</h1>
        <form className="form" action="/guardians" method="POST" onSubmit={this.handleSubmit}>
          <SelectBox inputName="guardianRelationship"
                     validate={validateRelationship}
                     handleValueChanged={this.handleValueChanged}
                     label="Relationship"
                     showValidations={this.state.submitted}
                     value={this.state.guardianRelationship}
          />

          <ContactFields
            handleValueChanged={this.handleValueChanged}
            showValidations={this.state.submitted}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            dob={this.state.dob}
          />
          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }

  handleValueChanged(name, value) {
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({['submitted']: true})
    if(this.isFormValid()) {
      event.target.submit()
    }
  }

  isFormValid() {
    return validateName(this.state.firstName) &&
      validateName(this.state.lastName) &&
      validateDate(this.state.dob) &&
      validateRelationship(this.state.guardianRelationship)
  }
}
