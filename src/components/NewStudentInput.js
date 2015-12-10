import React, {Component} from 'react'
import classNames from 'classnames'

export default class NewStudentInput extends Component {
  constructor(props) {
    super(props)

    this.validate = this.validate.bind(this)
    this.change = this.change.bind(this)
  }

  render() {
    const { fieldName, fieldLabel, errorMessage, value} = this.props

    return (
      <div className="row">
        <label htmlFor={fieldName} className={`input ${this.classNames}`}>
          {fieldLabel}
          <i className="fi-x"/>
          <i className="fi-check"/>
          <input type="text"
                 className="form-control"
                 value={value}
                 name={fieldName}
                 id={fieldName}
                 onBlur={this.validate}
                 onChange={this.change}
          />
          <span className="input-error">{errorMessage}</span>
        </label>
      </div>
    )
  }

  get classNames() {
    return classNames({
      'input-valid': this.props.wasTouched && this.props.isValid,
      'input-invalid': this.props.wasTouched && !this.props.isValid
    })
  }

  validate(event) {
    this.props.validator(event.target.value)
  }

  change(event) {
    this.props.onChange(event.target.value)
  }
}
