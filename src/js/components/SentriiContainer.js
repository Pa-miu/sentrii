import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FILTER_GROUP, FACTION_GROUP} from '../constants/MapConstants';
import * as MapActions from '../actions/MapActions';

//import TestButtons from './TestButtons';
import Header from './Header';
import MapContent from './MapContent';
import Footer from './Footer';

class SentriiContainer extends Component {
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
    const {dispatch, isRadiant, campFilters, truesightFilters, wardFilters} = this.props;
    const actions = bindActionCreators(MapActions, dispatch);
    let leftControls = [
      {type: FILTER_GROUP, label: 'wardFilters', filters: wardFilters},
      {type: FILTER_GROUP, label: 'truesightFilters', filters: truesightFilters}
    ];
    let rightControls = [
      {type: FACTION_GROUP, label: 'faction', ontext: 'radiant', offtext: 'dire', switch: isRadiant},
      {type: FILTER_GROUP, label: 'campFilters', filters: campFilters}
    ];

    return(
      <div className='sentrii-container'>
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
};

SentriiContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isRadiant: PropTypes.bool.isRequired,
  campFilters: PropTypes.object.isRequired,
  truesightFilters: PropTypes.object.isRequired,
  wardFilters: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
      isRadiant: state.isRadiant,
      campFilters: state.campFilters,
      truesightFilters: state.truesightFilters,
      wardFilters: state.wardFilters
    };
};

export default connect(mapStateToProps)(SentriiContainer);
