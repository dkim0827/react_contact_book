// Show Information of Each Contact Number
import React, { Component } from "react";
import "./css/PhoneInfo.css";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "Unknown",
      phone: "XXX-XXX-XXXX",
      id: 0
    }
  };

  state = {
    // when edit buttons clicked will set editing === true
    // when it is true will show text type info as input type info
    editing: false,
    // value of input is dynamic so to place data set field
    name: "",
    phone: ""
  };

  handleRemove = () => {
    // if deleted button clicked call with onRemove(id)
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  // set edit as opposite value(toggle)
  // true -> false, false -> true
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  // function called when onChange occure in input
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // Logic for edit
    // when press edit, previous value shows up in Input
    // when apply edit, send input to parent

    const { info, onUpdate } = this.props;
    if (!prevState.editing && this.state.editing) {
      // when editing changed false -> true
      // put value of info in the state
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }

    if (prevState.editing && !this.state.editing) {
      // when editing changed true -> false
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  render() {
    const { editing } = this.state;
    if (editing) {
      return (
        <div>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="Phone"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>Apply</button>
          <button onClick={this.handleRemove}>Delete</button>
        </div>
      );
    }
    const { name, phone } = this.props.info;
    return (
      <div className="phoneinfo__container">
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}

export default PhoneInfo;
