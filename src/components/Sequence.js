import React, { Component } from "react";
import "./Sequence.css";
import SequenceItem from "./SequenceItem";
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Scatter,
  LineChart,
  Line
} from "recharts";

class Sequence extends Component {
  render() {
    const { data, type, maxValues, displayType } = this.props;
    const name = ` up to ${maxValues}`;

    let contents;

    if (displayType === "values") {
      contents = data.map((value, i) => <SequenceItem value={value} key={i} />);
    } else if (displayType === "scatter") {
      const dataCoordinates = data.map((value, i) => ({
        x: i,
        y: value
      }));
      contents = (
        <ScatterChart
          width={Math.max(130 + data.length * 30, 830)}
          height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="x" name="" unit="" />
          <YAxis dataKey="y" name="" unit="" />
          <Scatter name="values" data={dataCoordinates} fill="#DCFCDC" />
        </ScatterChart>
      );
    } else if (displayType === "line") {
      const dataCoordinates = data.map((value, i) => ({
        x: i,
        y: value
      }));
      contents = (
        <LineChart
          width={Math.max(130 + data.length * 30, 830)}
          height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
          data={dataCoordinates}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="x" name="" unit="" />
          <YAxis dataKey="y" name="" unit="" />
          <Line type="monotone" dataKey="y" stroke="#82ca9d" />
        </LineChart>
      );
    }

    return (
      <div className="sequence">
        <div className="sequence-name">
          <span className="sequence-type">{type}</span>
          {name}
        </div>
        {contents}
      </div>
    );
  }
}

export default Sequence;
