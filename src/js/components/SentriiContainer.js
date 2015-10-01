import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FILTER_GROUP, FACTION_GROUP } from '../constants/MapConstants';
import * as MapActions from '../actions/MapActions';

// import TestButtons from './TestButtons';
import Header from './Header';
import MapContent from './MapContent';
import Footer from './Footer';

class SentriiContainer extends Component {
  constructor() {
    super();
    this.printState = this.printState.bind(this);
    this.configFilters = this.configFilters.bind(this);
    this.configFaction = this.configFaction.bind(this);
  }

  printState() {
    console.log('Is Radiant');
    console.log(this.props.isRadiant);
    console.log('Ward Filters');
    console.log(this.props.wardFilters);
    console.log('Camp Filters');
    console.log(this.props.campFilters);
  }

  configFilters(label, filters) {
    return { type: FILTER_GROUP, label, filters };
  }

  configFaction(label, ontext, offtext, isRadiant) {
    return { type: FACTION_GROUP, label, ontext, offtext, isRadiant };
  }

  render() {
    const { dispatch, isRadiant, campFilters, truesightFilters, wardFilters } = this.props;
    const actions = bindActionCreators(MapActions, dispatch);

    const leftControls = [
      this.configFilters('wards', wardFilters),
      this.configFilters('truesight', truesightFilters)
    ];
    const rightControls = [
      this.configFaction('faction', 'radiant', 'dire', isRadiant),
      this.configFilters('camps', campFilters)
    ];

    return (
      <div className='sentrii-container grid'>
        <Header/>
        <MapContent
          actions={actions}
          leftControls={leftControls}
          rightControls={rightControls}
        />
        <Footer/>
      </div>
    );
  }
}

SentriiContainer.propTypes = {
  campFilters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  isRadiant: PropTypes.bool.isRequired,
  truesightFilters: PropTypes.object.isRequired,
  wardFilters: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    isRadiant: state.isRadiant,
    campFilters: state.campFilters,
    truesightFilters: state.truesightFilters,
    wardFilters: state.wardFilters
  };
}

export default connect(mapStateToProps)(SentriiContainer);
