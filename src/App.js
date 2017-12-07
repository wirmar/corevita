import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Corevita from './Corevita/Corevita';
import Map from './Map/Map';
import MapZoom from './Map/MapZoom';

const tabs = {
  COREVITA: 'corevita',
  MAP: 'map',
};

const minZoom = 100;
const maxZoom = 400;

class App extends Component {
  state = {
    tab: tabs.COREVITA,
    mapZoom: 100,
  };

  render() {
    const { tab, mapZoom } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Corevita</h1>
        </header>
        <div className="App-tabs">
          <button
            className={`App-tab${tab === tabs.COREVITA ? ' active' : ''}`}
            name="corevita"
            type="button"
            onClick={this.onTabChange}>
            Corevita
          </button>
          <button
            className={`App-tab${tab === tabs.MAP ? ' active' : ''}`}
            name="map"
            type="button"
            onClick={this.onTabChange}>
            Map
          </button>
        </div>
        <Corevita isHidden={tab !== tabs.COREVITA} />
        <Map isHidden={tab !== tabs.MAP} zoom={mapZoom} onWheel={this.onWheelZoom} />
        <MapZoom
          zoom={mapZoom}
          onChange={this.onMapZoomChange}
          isHidden={tab !== tabs.MAP}
          min={minZoom}
          max={maxZoom}
        />
      </div>
    );
  }

  onTabChange = event => {
    this.setState({ tab: event.target.name });
  };

  onMapZoomChange = zoom => {
    this.setState({ mapZoom: zoom });
  };

  onWheelZoom = event => {
    event.preventDefault();
    const { deltaX } = event;
    this.setState(state => {
      let zoom = state.mapZoom + deltaX;
      if (zoom < minZoom) {
        zoom = minZoom;
      } else if (zoom > maxZoom) {
        zoom = maxZoom;
      }
      return {
        mapZoom: zoom,
      };
    });
  };
}

export default App;
