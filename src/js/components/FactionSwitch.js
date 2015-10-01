import React, { Component, PropTypes } from 'react';

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
      <div className={'faction-switch ' + (this.props.isRadiant ? 'radiant' : 'dire')} onClick={this.handleSwitch}>
        <div className={'faction-switch-elements ' + (this.props.isRadiant ? 'move-right' : 'move-left')}>
          <div className='switch-half radiant'>{this.props.ontext}</div>
          <div className='switch-handle'/>
          <div className='switch-half dire'>{this.props.offtext}</div>
        </div>
      </div>
    );
  }
}

FactionSwitch.propTypes = {
  isRadiant: PropTypes.bool.isRequired,
  offtext: PropTypes.string.isRequired,
  ontext: PropTypes.string.isRequired,
  switchFaction: PropTypes.func.isRequired
};
