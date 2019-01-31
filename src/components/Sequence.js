import React, { Component } from "react";
import "./Sequence.css";
import SequenceItem from "./SequenceItem";

class Sequence extends Component {
  render() {
    const { data, name, upTo } = this.props;
    return (
      <div className="Sequence">
        <div>
          <div>Sequence name: {name}</div>
          <div>up to: {upTo}</div>
        </div>
        {data.map((value, i) => (
          <SequenceItem value={value} key={i} />
        ))}
      </div>
    );
  }
}

export default Sequence;
