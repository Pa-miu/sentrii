import React, { Component, PropTypes } from 'react';
import { RADIANT } from '../constants/MapConstants';

export default class FactionSwitch extends Component {
  constructor() {
    super();
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.props.switchFaction();
  }

  render() {
    return (
      <div className={'faction-switch ' + (this.props.faction === RADIANT ? 'radiant' : 'dire')} onClick={this.handleSwitch}>
        <div className={'faction-switch-elements ' + (this.props.faction === RADIANT ? 'move-right' : 'move-left')}>
          <div className='switch-half radiant'>{this.props.ontext}</div>
          <div className='switch-handle'/>
          <div className='switch-half dire'>{this.props.offtext}</div>
        </div>
      </div>
    );
  }
}

FactionSwitch.propTypes = {
  faction: PropTypes.string.isRequired,
  offtext: PropTypes.string.isRequired,
  ontext: PropTypes.string.isRequired,
  switchFaction: PropTypes.func.isRequired
};
