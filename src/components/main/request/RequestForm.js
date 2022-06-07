import React, { Component } from "react";

export class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log("Form sended");
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__top-block">
          <div className="field">
            <div className="field__title">Full name</div>
            <input
              type="text"
              name="FullName"
              id=""
              value={this.state.FullName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="field">
            <div className="field__title">Phone number</div>
            <input
              type="tel"
              name="PhoneNumber"
              id=""
              value={this.state.PhoneNumber}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="field">
            <div className="field__title">Adress</div>
            <input
              type="text"
              name="Adress"
              id=""
              value={this.state.Adress}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="field">
            <div className="field__title">Email</div>
            <input
              type="email"
              name="Email"
              id=""
              value={this.state.Email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="field">
            <div className="field__title">Requsted service</div>
            <input
              type="text"
              name="RequestedService"
              id=""
              value={this.state.RequestedService}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="field">
            <div className="field__title">Day of service</div>
            <input
              type="text"
              name="DayOfService"
              id=""
              value={this.state.DayOfService}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="form__bottom-block">
          <div className="field field_big">
            <div className="field__title">Add a note</div>
            <textarea
              name="AddANote"
              id=""
              value={this.state.AddANote}
              onChange={this.handleInputChange}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="form__button button"
          name="Submit message"
        >
          Submit message
        </button>
      </form>
    );
  }
}

export default RequestForm;
