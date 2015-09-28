import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MapActions from '../actions/MapActions';

import TestButtons from './TestButtons';

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

    return(
      <TestButtons
        printState={this.printState}
        toggleFaction={actions.toggleFaction}
        toggleFilter={actions.toggleFilter}
        switchAll={actions.switchAll}
      />
    );
  }
};

SentriiApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isRadiant: PropTypes.bool.isRequired,
  wardFilters: PropTypes.object.isRequired,
  campFilters: PropTypes.object.isRequired,
  truesightFilters: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
      isRadiant: state.isRadiant,
      wardFilters: state.wardFilters,
      campFilters: state.campFilters,
      truesightFilters: state.truesightFilters
    };
};

export default connect(mapStateToProps)(SentriiApp);
