import React from 'react'
import ValidatedComponent from './ValidatedComponent.jsx'

export default class InputField extends ValidatedComponent {
  render() {
    return (
      <div className="row">
        <label htmlFor={this.props.inputName}>
          {this.props.label}
          <input type="text"
                 className={this.validationClassNames()}
                 name={this.props.inputName}
                 id={this.props.inputName}
                 defaultValue={this.props.value}
                 onChange={this.handleValueChange}
                 onBlur={this.handleValueChange}
          />
        </label>
      </div>
    )
  }
}