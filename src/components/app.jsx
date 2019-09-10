import React, { Component } from 'react';
import SimpleMap from './simple_map.jsx';

class App extends Component {
  render () {
    return (
      <div>
        <div className="left-scene">
        </div>
        <div className="right-scene">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
