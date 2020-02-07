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
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default PhoneForm;
