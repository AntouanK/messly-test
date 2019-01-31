import React, { Component } from "react";
import "./Sequences.css";
import Sequence from "./Sequence";

class Sequences extends Component {
  render() {
    const { sequences, errors } = this.props;
    return (
      <div>
        <div>
          {errors.map(error => (
            <div className="sequence-error">{error.text}</div>
          ))}
        </div>
        <div className="Sequences">
          {sequences.map(sequence => (
            <Sequence key={sequence.id} {...sequence} />
          ))}
        </div>
      </div>
    );
  }
}

export default Sequences;
