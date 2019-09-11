import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  render () {
    return (
    <div className="flat-list">
      { this.props.flats.map(flat => {
        return <Flat flat={flat} key={flat.name} selectFlat={this.props.selectFlat} />;
      })}
    </div>
    );
  }
}

export default FlatList;
