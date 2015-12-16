import React from 'react'
import ValidatedComponent from './ValidatedComponent.jsx'

export default class SelectBox extends ValidatedComponent {
  render() {
    return (
      <div className="row">
        <label htmlFor={this.props.inputName}>
          {this.props.label}
          <select className={this.validationClassNames()}
                  defaultValue={this.props.value}
                  onBlur={this.handleValueChange}
                  onChange={this.handleValueChange}

          >
            <option value="">Select One...</option>
            <option value="Parent">Parent</option>
            <option value="Grandparent">Grandparent</option>
            <option value="Sibling">Sibling</option>
          </select>
        </label>
      </div>
    );
  }
}