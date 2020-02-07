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

  handleRemove = () => {
    // if deleted button clicked call with onRemove(id)
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  render() {
    const { name, phone } = this.props.info;
    return (
      <div className="phoneinfo__container">
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}

export default PhoneInfo;
