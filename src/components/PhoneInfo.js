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

  render() {
    const { name, phone, id } = this.props.info;
    return (
      <div className="phoneinfo__container">
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PhoneInfo;
