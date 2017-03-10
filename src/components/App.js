import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="AppWrapper">
        <h1>Hello world, this is an app!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
