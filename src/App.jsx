import React, { Component } from 'react';

class App extends Component {
  state = {
    location: {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({ location: pos.coords })
    })
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
