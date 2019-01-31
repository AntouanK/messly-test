import React, { Component } from "react";
import "./Sequences.css";
import Sequence from "./Sequence";

class Sequences extends Component {
  render() {
    const { sequences } = this.props;
    return (
      <div className="Sequences">
        {sequences.map((sequence, i) => (
          <Sequence
            key={i}
            data={sequence.data}
            type={sequence.type}
            maxValues={sequence.maxValues}
          />
        ))}
      </div>
    );
  }
}

export default Sequences;
