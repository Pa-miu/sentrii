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
    this.configFilters = this.configFilters.bind(this);
    this.configFaction = this.configFaction.bind(this);
  }

  configFilters(label, filters) {
    return { type: FILTER_GROUP, label, filters };
  }

  configFaction(label, ontext, offtext, faction) {
    return { type: FACTION_GROUP, label, ontext, offtext, faction };
  }

  render() {
    const { dispatch, faction, camps, truesight, wards } = this.props;
    const actions = bindActionCreators(MapActions, dispatch);
    const filters = { wards, truesight, camps };

    const leftControls = [
      this.configFilters('wards', wards),
      this.configFilters('truesight', truesight)
    ];
    const rightControls = [
      this.configFaction('faction', 'radiant', 'dire', faction),
      this.configFilters('camps', camps)
    ];

    return (
      <div className='sentrii-container grid'>
        <Header/>
        <MapContent
          actions={actions}
          faction={faction}
          filters={filters}
          leftControls={leftControls}
          rightControls={rightControls}
        />
        <Footer/>
      </div>
    );
  }
}

SentriiContainer.propTypes = {
  camps: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  faction: PropTypes.string.isRequired,
  truesight: PropTypes.object.isRequired,
  wards: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    faction: state.faction,
    camps: state.camps,
    truesight: state.truesight,
    wards: state.wards
  };
}

export default connect(mapStateToProps)(SentriiContainer);
