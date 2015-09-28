import React, {Component, Proptypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MapActions from '../actions/MapActions';

class SentriiApp extends Component {
  constructor() {
    super();
    this.printState = this.printState.bind(this);
  }

  printState() {
    console.log("Is Radiant");
    console.log(this.props.isRadiant);
    console.log("Ward Filters");
    console.log(this.props.wardFilters);
    console.log("Camp Filters");
    console.log(this.props.campFilters);
  }

  render() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(MapActions, dispatch);
    this.printState();
    return (
      <div>
        <button onClick={(e) => actions.toggleFaction()}>
          Test Faction Toggle
        </button>
          <br/>
        <button onClick={(e) => actions.toggleFilter('wardFilters', 'runes')}>
          Test Rune Toggle
        </button>
          <br/>
        <button onClick={(e) => actions.switchAll('campFilters', true)}>
          Test Switch On Camps
        </button>
          <br/>
        <button onClick={(e) => actions.switchAll('campFilters', false)}>
          Test Switch Off Camps
        </button>
      </div>
    );
  }
};

function mapStateToProps(state){
    return {
      isRadiant: state.isRadiant,
      wardFilters: state.wardFilters,
      campFilters: state.campFilters,
      truesightFilters: state.truesightFilters
    };
};

export default connect(mapStateToProps)(SentriiApp);
