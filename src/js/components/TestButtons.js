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
        <button onClick={() => this.props.toggleFilter('wards', 'runes')}>Toggle Runes</button>
          <br/>
        <button onClick={() => this.props.toggleGroup('camps', true)}>Turn On camps</button>
          <br/>
        <button onClick={() => this.props.toggleGroup('camps', false)}>Turn Off camps</button>
      </div>
    );
  }
}

TestButtons.propTypes = {
  printState: PropTypes.func.isRequired,
  switchFaction: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  toggleGroup: PropTypes.func.isRequired
};
