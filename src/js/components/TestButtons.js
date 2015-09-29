import React, { Component, PropTypes } from 'react';

export default class TestButtons extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.printState()}>Print State</button>
          <br/>
        <button onClick={() => this.props.switchFaction()}>Toggle Faction</button>
          <br/>
        <button onClick={() => this.props.toggleFilter('wardFilters', 'runes')}>Toggle Runes</button>
          <br/>
        <button onClick={() => this.props.toggleAll('campFilters', true)}>Turn On campFilters</button>
          <br/>
        <button onClick={() => this.props.toggleAll('campFilters', false)}>Turn Off campFilters</button>
      </div>
    );
  }
}

TestButtons.propTypes = {
  printState: PropTypes.func.isRequired,
  switchFaction: PropTypes.func.isRequired,
  toggleAll: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired
};
