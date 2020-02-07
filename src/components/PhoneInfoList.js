// Show List of PhoneInfo Component
import React, { Component } from "react";
import "./css/PhoneInfoList.css";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined")
  };

  shouldComponentUpdate(nextProps, nextState) {
    // when no change needed don't render
    return nextProps.data !== this.props.data;
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    // key must need and need to be unique
    const list = data.map(info => (
      <PhoneInfo
        key={info.id}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    ));

    return <div className="infoList__container">{list}</div>;
  }
}

export default PhoneInfoList;
