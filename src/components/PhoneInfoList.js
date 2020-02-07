// Show List of PhoneInfo Component
import React, { Component } from "react";
import "./css/PhoneInfoList.css";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn("onRemove not defined")
  };

  render() {
    const { data, onRemove } = this.props;
    // key must need and need to be unique
    const list = data.map(info => (
      <PhoneInfo key={info.id} info={info} onRemove={onRemove} />
    ));

    return <div className="infoList__container">{list}</div>;
  }
}

export default PhoneInfoList;
