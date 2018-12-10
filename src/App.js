import React, { Component } from 'react';

import CollapsibleTab from './features/CollapsibleTab';
import Editor from './features/Editor';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CollapsibleTab />
        <Editor />
      </div>
    );
  }
}

export default App;
