import NewStudentInput from './NewStudentInput'

import React, {Component} from 'react'
import moment from 'moment'

export default class NewStudent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: {
        value: undefined,
        isValid: true,
        wasTouched: false
      },
      lastName: {
        value: undefined,
        isValid: true,
        wasTouched: false
      },
      dateOfBirth: {
        value: undefined,
        isValid: true,
        wasTouched: false
      }
    }

    this.storeFirstName = this.storeFirstName.bind(this)
    this.storeLastName = this.storeLastName.bind(this)
    this.storeDateOfBirth = this.storeDateOfBirth.bind(this)

    this.validateFirstName = this.validateFirstName.bind(this)
    this.validateLastName = this.validateLastName.bind(this)
    this.validateDateOfBirth = this.validateDateOfBirth.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <form
        className="form"
        action="/students"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <NewStudentInput
          fieldName="firstName"
          fieldLabel="First Name"
          validator={this.validateFirstName}
          isValid={this.state.firstName.isValid}
          wasTouched={this.state.firstName.wasTouched}
          value={this.state.firstName.value}
          onChange={this.storeFirstName}
          errorMessage="First name is required and must be at least 2 characters"
        />
        <NewStudentInput
          fieldName="lastName"
          fieldLabel="Last Name"
          validator={this.validateLastName}
          isValid={this.state.lastName.isValid}
          wasTouched={this.state.lastName.wasTouched}
          value={this.state.lastName.value}
          onChange={this.storeLastName}
          errorMessage="Last name is required and must be at least 2 characters"
        />
        <NewStudentInput
          fieldName="dob"
          fieldLabel="Date of Birth"
          validator={this.validateDateOfBirth}
          isValid={this.state.dateOfBirth.isValid}
          wasTouched={this.state.dateOfBirth.wasTouched}
          value={this.state.dateOfBirth.value}
          onChange={this.storeDateOfBirth}
          errorMessage="Date is required, must be in MM/DD/YYYY, and student must be 18"
        />
        <button
          className="small-3 columns"
          type="submit"
        >Submit
        </button>
      </form>
    )
  }

  validateFirstName(firstName) {
    const firstNameIsValid = this.validateTwoCharacterString(firstName)
    const firstNameState = {
      ...this.state.firstName,
      isValid: firstNameIsValid,
      wasTouched: true
    }
    this.setState({
      firstName: firstNameState
    })
    return firstNameIsValid
  }

  storeFirstName(firstName) {
    this.setState({
      firstName: {
        ...this.state.firstName,
        value: firstName
      }
    })
  }

  validateLastName() {
    const lastNameIsValid = this.validateTwoCharacterString(this.state.lastName.value);
    const lastNameState = {
      ...this.state.lastName,
      isValid: lastNameIsValid,
      wasTouched: true
    }
    this.setState({
      lastName: lastNameState
    })
    return lastNameIsValid
  }

  storeLastName(lastName) {
    this.setState({
      lastName: {
        ...this.state.lastName,
        value: lastName
      }
    })
  }

  storeDateOfBirth(dob) {
    this.setState({
      dateOfBirth: {
        ...this.state.dateOfBirth,
        value: dob
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const firstNameIsValid = this.validateFirstName(this.state.firstName.value);
    const lastNameIsValid = this.validateLastName(this.state.lastName.value);
    const dateOfBirthIsValid = this.validateDateOfBirth(this.state.dateOfBirth.value);

    const formIsValid = firstNameIsValid &&
      lastNameIsValid &&
      dateOfBirthIsValid

    if (formIsValid) {
      event.target.submit()
    }
  }

  validateTwoCharacterString(string) {
    if (string && string.length >= 2) {
      return true
    }

    return false
  }

  validateDateOfBirth(dob) {
    const dateOfBirthIsValid = this._validateDateOfBirth(dob)
    const dateOfBirthState = {
      ...this.state.dateOfBirth,
      isValid: dateOfBirthIsValid,
      wasTouched: true
    }
    this.setState({
      dateOfBirth: dateOfBirthState
    })
    return dateOfBirthIsValid
  }

  _validateDateOfBirth(dob) {
    if (!Date.parse(dob)) {
      return false
    }

    var parsedDob = moment(dob, 'MM/DD/YYYY').format('x')
    var eighteenYearsAgo = moment().subtract(18, 'years').format('x')
    return parsedDob < eighteenYearsAgo
  }
}
