import React, {Component} from 'react'

export default class InputField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: undefined
    }

    this.handleNameChange = this.handleNameChange.bind(this)
  }

  render() {
    return (
      <div className="row">
        <label htmlFor={this.props.inputName}>
          {this.props.label}
          <input type="text"
                 className={this.validationClassNames()}
                 name={this.props.inputName}
                 id={this.props.inputName}
                 onChange={this.handleNameChange}
                 onBlur={this.handleNameChange}
          />
        </label>
      </div>
    )
  }

  handleNameChange(event) {
    let inputValue = event.target.value
    this.setState({value: inputValue})
    if(this.props.validate(inputValue)) {
      this.props.handleValueChanged(this.props.inputName, inputValue)
    }
  }

  validationClassNames() {
    let classNames = 'form-control'
    if(!this.fieldHasBeenTouched()) {
      return classNames
    }

    if(this.props.validate(this.state.value)) {
      classNames += ' input-valid'
    } else {
      classNames += ' input-invalid'
    }

    return classNames
  }

  fieldHasBeenTouched() {
    return typeof this.state.value !== 'undefined'
  }
}