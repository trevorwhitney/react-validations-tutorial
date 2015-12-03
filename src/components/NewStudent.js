import React, {Component} from 'react'

export default class NewStudent extends Component {
  render() {
    return (
      <form className="form" action="/students" method="POST">
        <div className="row">
          <label htmlFor="firstName">
            First Name
            <input type="text"
                   className="form-control"
                   name="firstName"
                   id="firstName"
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="lastName">
            Last Name
            <input type="text"
                   className="form-control"
                   name="lastName"
                   id="lastName"
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="dobMonth">
            Date of Birth
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
