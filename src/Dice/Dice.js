import React, { Component } from 'react';

import { dieTypes, rollDice } from './helper';
import './Dice.css';

class Dice extends Component {
  state = {
    modifier: '0',
    count: '1',
    dieType: 'd20',
    results: [],
  };

  render() {
    const style = {};
    if (this.props.isHidden) {
      style.display = 'none';
    }
    return (
      <div style={style} className="Dice">
        <form onSubmit={this.onSubmit} className="Dice-form">
          <input
            type="number"
            className="Dice-number-input"
            min={1}
            name="count"
            value={this.state.count}
            onChange={this.onChange}
          />
          <select
            className="Dice-select"
            name="dieType"
            value={this.state.dieType}
            onChange={this.onChange}>
            {this.renderDieTypes()}
          </select>
          <input
            type="number"
            className="Dice-number-input"
            name="modifier"
            value={this.state.modifier}
            onChange={this.onChange}
          />
          <button type="button" className="Dice-button" onClick={this.clearOutput}>
            Clear
          </button>
          <button type="submit" className="Dice-button">
            Roll
          </button>
        </form>
        <div className="Dice-results">{this.renderResults()}</div>
      </div>
    );
  }

  renderDieTypes = () =>
    Object.keys(dieTypes).map(key => (
      <option value={key} key={key}>
        {key}
      </option>
    ));

  renderResults = () =>
    this.state.results.map((result, i) => (
      <div key={i} className={`Dice-result${i === this.state.results.length - 1 ? ' latest' : ''}`}>
        {result.dice}: {result.result} ({result.avg} average)
      </div>
    ));

  clearOutput = event => {
    this.setState({ results: [] });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { count, dieType, modifier } = this.state;
    event.preventDefault();
    const dice = `${count}${dieType} + ${modifier}`;
    const result = rollDice(parseInt(count, 10), dieType, parseInt(modifier, 10));
    const avg = (count * (dieTypes[dieType] + 1) + modifier * 2) / 2;
    this.setState(state => ({
      results: [
        ...state.results,
        {
          dice,
          result,
          avg,
        },
      ],
    }));
  };
}

export default Dice;
