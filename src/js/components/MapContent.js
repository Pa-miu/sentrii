import React, { Component, PropTypes } from 'react';
import { FILTER_GROUP, FACTION_GROUP } from '../constants/MapConstants';
import ControlLabel from './ControlLabel';
import FilterToggle from './FilterToggle';
import FactionSwitch from './FactionSwitch';

export default class MapContent extends Component {
  constructor() {
    super();
    this.generateControls = this.generateControls.bind(this);
    this.generateFilterGroup = this.generateFilterGroup.bind(this);
    this.generateFactionGroup = this.generateFactionGroup.bind(this);
  }

  generateControls(configObject) {
    switch (configObject.type) {
      case FILTER_GROUP:
        return this.generateFilterGroup(configObject);
      case FACTION_GROUP:
        return this.generateFactionGroup(configObject);
      default:
        return null;
    }
  }

  generateFilterGroup(configObject) {
    const filters = [];
    for (const key in configObject.filters) {
      filters.push(<FilterToggle key={key} name={key}/>);
    }
    return (
      <div key={configObject.label} className='control-group'>
        <ControlLabel label={configObject.label}/>
        {filters}
      </div>
    );
  }

  generateFactionGroup(configObject) {
    return (
      <div key={configObject.label} className='control-group'>
        <ControlLabel label={configObject.label}/>
        <FactionSwitch
          switch={configObject.switch}
          ontext={configObject.ontext}
          offtext={configObject.offtext}
        />
      </div>
    );
  }

  /*
    let rightControls = [
      {type: FACTION_GROUP, label: 'faction', ontext: 'radiant', offtext: 'dire', switch: isRadiant},
      {type: FILTER_GROUP, label: 'campFilters', filters: campFilters}
    ];
  */

  render() {
    const leftControls = this.props.leftControls.map(this.generateControls);
    const rightControls = this.props.rightControls.map(this.generateControls);
    return (
      <div className='map-content-container'>
        <div className='left-container'>
          {leftControls}
        </div>
        <div className='pixi-container'>
        </div>
        <div className='right-container'>
          {rightControls}
        </div>
      </div>
    );
  }
}

MapContent.propTypes = {
  actions: PropTypes.shape({
    switchFaction: PropTypes.func.isRequired,
    toggleFilter: PropTypes.func.isRequired,
    toggleAll: PropTypes.func.isRequired
  }),
  leftControls: PropTypes.array,
  rightControls: PropTypes.array
};
