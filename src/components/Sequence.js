import React, { Component } from "react";
import "./Sequence.css";
import SequenceItem from "./SequenceItem";

class Sequence extends Component {
  render() {
    const { data, type, maxValues } = this.props;
    const name = ` up to ${maxValues}`;

    return (
      <div className="sequence">
        <div className="sequence-name">
          <span className="sequence-type">{type}</span>
          {name}
        </div>
        {data.map((value, i) => (
          <SequenceItem value={value} key={i} />
        ))}
      </div>
    );
  }
}

export default Sequence;
