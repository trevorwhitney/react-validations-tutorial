import React, {Component} from 'react'

export default class ValidatedComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: undefined
    }

    this.handleValueChange = this.handleValueChange.bind(this)
  }

  render() {
    throw new Exception('NOT IMPLEMENTED');
  }

  handleValueChange(event) {
    let inputValue = event.target.value
    this.setState({value: inputValue})
    if(this.props.validate(inputValue)) {
      this.props.handleValueChanged(this.props.inputName, inputValue)
    }
  }

  validationClassNames() {
    let classNames = 'form-control'
    if(!this.showValidations()) {
      return classNames
    }

    if(this.props.validate(this.state.value)) {
      classNames += ' input-valid'
    } else {
      classNames += ' input-invalid'
    }

    return classNames
  }

  showValidations() {
    return (typeof this.state.value !== "undefined") || this.props.showValidations
  }
}