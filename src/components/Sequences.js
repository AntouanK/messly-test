import React, { Component } from "react";
import "./Sequences.css";
import Sequence from "./Sequence";

class Sequences extends Component {
  render() {
    const { sequences } = this.props;
    return (
      <div className="Sequences">
        {sequences.map(sequence => (
          <Sequence key={sequence.id} {...sequence} />
        ))}
      </div>
    );
  }
}

export default Sequences;
