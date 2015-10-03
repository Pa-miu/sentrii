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
    console.log(this.props.ward);
    console.log('Camp Filters');
    console.log(this.props.camp);
  }

  configFilters(label, filters) {
    return { type: FILTER_GROUP, label, filters };
  }

  configFaction(label, ontext, offtext, isRadiant) {
    return { type: FACTION_GROUP, label, ontext, offtext, isRadiant };
  }

  render() {
    const { dispatch, isRadiant, camp, truesight, ward } = this.props;
    const actions = bindActionCreators(MapActions, dispatch);

    const leftControls = [
      this.configFilters('ward', ward),
      this.configFilters('truesight', truesight)
    ];
    const rightControls = [
      this.configFaction('faction', 'radiant', 'dire', isRadiant),
      this.configFilters('camp', camp)
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
  camp: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  isRadiant: PropTypes.bool.isRequired,
  truesight: PropTypes.object.isRequired,
  ward: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    isRadiant: state.isRadiant,
    camp: state.camp,
    truesight: state.truesights,
    wardF: state.ward
  };
}

export default connect(mapStateToProps)(SentriiContainer);
