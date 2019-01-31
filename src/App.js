import React, { Component } from "react";
import "./App.css";
import SequencesContainer from "./components/SequencesContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
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
