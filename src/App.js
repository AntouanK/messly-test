import React, { Component } from "react";
import "./App.css";
import SequencesContainer from "./components/SequencesContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { addSequence } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    store.dispatch(addSequence({ type: "fibonacci", maxValues: 10 }));
    store.dispatch(addSequence({ type: "triangle", maxValues: 10 }));
    store.dispatch(
      addSequence({ type: ["fibonacci", "triangle"], maxValues: 10 })
    );
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SequencesContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
