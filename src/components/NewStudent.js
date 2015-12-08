import React, {Component} from 'react'

export default class NewStudent extends Component {
  render() {
    return (
      <form className="form" action="/students" method="POST">
        <div className="row">
          <label htmlFor="firstName" className="input">
            First Name
            <i className="fi-x" />
            <i className="fi-check" />
            <input type="text"
                   className="form-control"
                   name="firstName"
                   id="firstName"
            />
            <span className="input-error">It broke</span>
          </label>
        </div>
        <div className="row">
          <label htmlFor="lastName" className="input">
            Last Name
            <i className="fi-x" />
            <i className="fi-check" />
            <input type="text"
                   className="form-control"
                   name="lastName"
                   id="lastName"
            />
            <span className="input-error">It didn't break</span>
          </label>
        </div>
        <div className="row">
          <label htmlFor="dobMonth" className="input">
            Date of Birth
            <i className="fi-x" />
            <i className="fi-check" />
            <input type="text"
                   className="form-control"
                   name="dob"
                   id="dob"
            />
          </label>
        </div>

        <div className="row">
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}
