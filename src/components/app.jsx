import React, { Component } from 'react';
import SimpleMap from './simple_map.jsx';
import flats from './../../assets/flats.js';
import Flat from './flat.jsx';
import FlatList from './flat-list.jsx';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      flats: flats,
      selectedFlatLat: '59.955413',
      selectedFlatLng: '30.337844',
    };
  }

  selectFlat = (lat, lng, price) => {
    this.setState({
      selectedFlatLat: lat,
      selectedFlatLng: lng,
      price: price,
      centerLat: lat,
      centerLng: lng,
    });
  }
  render () {
    return (
      <div>
        <div className="left-scene">
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        </div>
        <div className="right-scene">
          <SimpleMap lat={this.state.selectedFlatLat} lng={this.state.selectedFlatLng} price={this.state.price} clat={this.state.centerLat} clng={this.state.centerLng}/>
        </div>
      </div>
    );
  }
}

export default App;
