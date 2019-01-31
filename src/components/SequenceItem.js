import React, { Component } from "react";
import "./SequenceItem.css";

class SequenceItem extends Component {
  render() {
    const { value } = this.props;
    return <div className="SequenceItem">{value}</div>;
  }
}

export default SequenceItem;
