import React, {Component} from 'react'

export default class ValidatedComponent extends Component {
  constructor(props) {
    super(props)

    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(event) {
    let inputValue = event.target.value
    this.props.handleValueChanged(this.props.inputName, inputValue)
  }

  validationClassNames() {
    let classNames = 'form-control'
    if(!this.showValidations()) {
      return classNames
    }

    if(this.props.validate(this.props.value)) {
      classNames += ' input-valid'
    } else {
      classNames += ' input-invalid'
    }

    return classNames
  }

  showValidations() {
    return (typeof this.props.value !== "undefined") || this.props.showValidations
  }
}