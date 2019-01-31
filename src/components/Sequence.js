import React, { Component } from "react";
import "./Sequence.css";
import SequenceItem from "./SequenceItem";
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Scatter,
  LineChart,
  Line
} from "recharts";
import {
  setSequenceDisplayed,
  setSequenceMaxValues
} from "../redux/actions.js";
import store from "../redux/store";

//
// a small close link to hide/show that sequence
const Close = id => displayed => (
  <div>
    <span
      className="close-link"
      onClick={() =>
        store.dispatch(
          setSequenceDisplayed({
            id,
            displayed: !displayed
          })
        )
      }
    >
      [{displayed === true ? "close" : "open"}]
    </span>
  </div>
);

const onChangeMaxValues = id => ev => {
  const maxValues = +ev.target.value;
  store.dispatch(
    setSequenceMaxValues({
      id,
      maxValues
    })
  );
};

//
//
const getScatterChart = data => {
  const dataCoordinates = data.map((value, i) => ({
    x: i,
    y: value
  }));
  return (
    <ScatterChart
      width={Math.min(100 + data.length * 30, 900)}
      height={250}
      margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="x" name="" unit="" />
      <YAxis dataKey="y" name="" unit="" />
      <Scatter name="values" data={dataCoordinates} fill="#DCFCDC" />
    </ScatterChart>
  );
};

//
//
const getLineChart = data => {
  const dataCoordinates = data.map((value, i) => ({
    x: i,
    y: value
  }));
  return (
    <LineChart
      width={Math.max(130 + data.length * 30, 830)}
      height={250}
      margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      data={dataCoordinates}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="x" name="" unit="" />
      <YAxis dataKey="y" name="" unit="" />
      <Line type="monotone" dataKey="y" stroke="#DCFCDC" />
    </LineChart>
  );
};

//
//
class Sequence extends Component {
  render() {
    const { id, data, type, maxValues, displayType, displayed } = this.props;

    let contents;

    if (displayed !== true) {
      // sequence is hidden, so we need no contents...
      contents = null;
    } else {
      if (displayType === "values") {
        contents = data.map((value, i) => (
          <SequenceItem value={value} key={i} />
        ));
      } else if (displayType === "scatter") {
        contents = getScatterChart(data);
      } else if (displayType === "line") {
        contents = getLineChart(data);
      }
    }

    return (
      <div className="sequence">
        {Close(id)(displayed)}
        <div className="sequence-name">
          <span className="sequence-type">{type}</span>
          {" up to "}
          <input
            type="number"
            className="input-max-value"
            id={id + "-max-values"}
            value={maxValues}
            onChange={onChangeMaxValues(id)}
          />
        </div>
        {contents}
      </div>
    );
  }
}

export default Sequence;
