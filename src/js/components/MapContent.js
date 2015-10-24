import React, { Component, PropTypes } from 'react';
import { FILTER_GROUP, FACTION_GROUP } from '../constants/MapConstants';
import ControlLabel from './ControlLabel';
import FilterToggle from './FilterToggle';
import FactionSwitch from './FactionSwitch';
import PixiManager from '../pixi/PixiManager';

let pixi;   // The singleton pixi object that renders the canvas

export default class MapContent extends Component {
  constructor() {
    super();
    this.generateControls = this.generateControls.bind(this);
    this.generateFilterGroup = this.generateFilterGroup.bind(this);
    this.generateFactionGroup = this.generateFactionGroup.bind(this);
  }

  componentDidMount() {
    pixi = new PixiManager(680, 680, this.refs.pixiContainer, this.props.faction, this.props.filters);
  }

  componentDidUpdate() {
    pixi.recieveFilters(this.props.faction, this.props.filters);
    pixi.update();
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
    const filterArray = [];
    for (const key in configObject.filters) {
      filterArray.push(
        <FilterToggle
          key={key}
          label={key}
          group={configObject.label}
          isActive={configObject.filters[key]}
          toggleFilter={this.props.actions.toggleFilter}
        />
      );
    }
    return (
      <div key={configObject.label} className='control-group'>
        <ControlLabel
          label={configObject.label}
          toggleGroup={this.props.actions.toggleGroup}
          canToggleGroup
        />
        {filterArray}
      </div>
    );
  }

  generateFactionGroup(configObject) {
    return (
      <div key={configObject.label} className='control-group'>
        <ControlLabel label={configObject.label}/>
        <FactionSwitch
          switchFaction={this.props.actions.switchFaction}
          faction={configObject.faction}
          ontext={configObject.ontext}
          offtext={configObject.offtext}
        />
      </div>
    );
  }

  render() {
    const leftControls = this.props.leftControls.map(this.generateControls);
    const rightControls = this.props.rightControls.map(this.generateControls);
    return (
      <div className='map-content-container row'>
        <div className='side-container left col-1-6 no-select'>
          {leftControls}
        </div>
        <div className='pixi-container col-4-6 no-select' ref='pixiContainer'/>
        <div className='side-container right col-1-6 no-select'>
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
    toggleGroup: PropTypes.func.isRequired
  }),
  faction: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  leftControls: PropTypes.array,
  rightControls: PropTypes.array
};
