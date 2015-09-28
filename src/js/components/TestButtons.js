import React, {Component, PropTypes} from 'react';

export default class TestButtons extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <button onClick={(e) => this.props.printState()}>Print State</button>
          <br/>
        <button onClick={(e) => this.props.toggleFaction()}>Toggle Faction</button>
          <br/>
        <button onClick={(e) => this.props.toggleFilter('wardFilters', 'runes')}>Toggle Runes</button>
          <br/>
        <button onClick={(e) => this.props.switchAll('campFilters', true)}>Switch On Camps</button>
          <br/>
        <button onClick={(e) => this.props.switchAll('campFilters', false)}>Switch Off Camps</button>
      </div>
    );
  }
}

TestButtons.propTypes = {
  printState: PropTypes.func.isRequired,
  toggleFaction: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  switchAll: PropTypes.func.isRequired
};
