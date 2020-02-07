import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value // Computed Property names
    });
  };

  handleSubmit = e => {
    // Prevnt Reloading
    e.preventDefault();
    // send this.state to parent through onCreate
    this.props.onCreate(this.state);
    // Reset
    this.setState({
      name: "",
      phone: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name">Name</label>
        <br />
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          id="name"
        />
        <br />
        <label for="phone">Phone</label>
        <br />
        <input
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
          id="phone"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default PhoneForm;
