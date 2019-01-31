import React, { Component } from "react";
import "./App.css";
import SequencesContainer from "./components/SequencesContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { addSequence } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    store.dispatch(addSequence({ type: "simple", maxValues: 10 }));
    store.dispatch(addSequence({ type: "fibonacci", maxValues: 40 }));
    store.dispatch(addSequence({ type: "triangle", maxValues: 30 }));
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
