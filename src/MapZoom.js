import React from 'react';

const MapZoom = ({ onChange, zoom, isHidden, min, max }) => (
  <input
    className="App-zoom"
    value={zoom}
    min={min}
    max={max}
    type="range"
    hidden={isHidden}
    onChange={event => onChange(event.target.value)}
  />
);

export default MapZoom;
