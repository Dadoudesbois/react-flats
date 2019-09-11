import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat.lat, this.props.flat.lng, this.props.flat.price);
  }

  render () {
    const { imageUrl, price, name } = this.props.flat;
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${imageUrl}')`
    };
    return (
      <div className="card" style={style}
          onClick={this.handleClick}>
        <div className="card-category">{price}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
