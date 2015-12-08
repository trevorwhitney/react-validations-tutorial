import React, {Component} from 'react'
import classNames from 'classnames'

export default class NewStudentInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isValid: true,
      wasTouched: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render() {
    const { fieldName, fieldLabel, errorMessage} = this.props

    return (
      <div className="row">
        <label htmlFor={fieldName} className={`input ${this.classNames}`}>
          {fieldLabel}
          <i className="fi-x"/>
          <i className="fi-check"/>
          <input type="text"
                 className="form-control"
                 name={fieldName}
                 id={fieldName}
                 onBlur={this.handleInputChange}
          />
          <span className="input-error">{errorMessage}</span>
        </label>
      </div>
    )
  }

  get classNames() {
    return classNames({
      'input-valid': this.state.wasTouched && this.state.isValid,
      'input-invalid': this.state.wasTouched && !this.state.isValid
    })
  }

  handleInputChange(event) {
    this.setState({
      isValid: this.validateInput(event.target.value),
      wasTouched: true
    })
  }

  validateInput(value) {
    return this.props.validator(value)
  }
}
