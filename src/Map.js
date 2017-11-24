import React, { Component } from 'react';

import map from './Map.png';

class Map extends Component {
  render() {
    const { isHidden, zoom, onWheel } = this.props;
    return (
      <div
        className="App-map"
        onWheel={onWheel}
        ref={ref => (this.divElement = ref)}
        onDragStart={this.onDragStart}
        onDragOver={this.onDragOver}
        onDrag={this.onDrag}>
        <img
          style={{
            width: `${zoom}%`,
            height: `${zoom}%`,
          }}
          className="App-map-img"
          src={map}
          alt="Map of Corevita"
          hidden={isHidden}
        />
      </div>
    );
  }

  onDrag = event => {
    event.preventDefault();
    const { pageX, pageY } = event;
    const deltaX = this.previousX - pageX;
    const deltaY = this.previousY - pageY;
    this.previousX = pageX;
    this.previousY = pageY;
    this.divElement.scrollLeft += deltaX;
    this.divElement.scrollTop += deltaY;
  };

  onDragStart = event => {
    const { pageX, pageY } = event;
    this.previousX = pageX;
    this.previousY = pageY;
  };

  onDragOver = event => {
    event.preventDefault();
  };
}

export default Map;
