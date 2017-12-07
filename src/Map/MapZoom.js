import React from 'react';

import './MapZoom.css';

const MapZoom = ({ onChange, zoom, isHidden, min, max }) => (
  <input
    className="MapZoom"
    value={zoom}
    min={min}
    max={max}
    type="range"
    hidden={isHidden}
    onChange={event => onChange(event.target.value)}
  />
);

export default MapZoom;
