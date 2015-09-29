import React, { Component, PropTypes } from 'react';

export default class FactionSwitch extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='faction-switch'>
        <div className='switch-on'>{this.props.ontext}</div>
        <div className='switch-handle'>|</div>
        <div className='switch-off'>{this.props.offtext}</div>
      </div>
    );
  }
}

FactionSwitch.propTypes = {
  offtext: PropTypes.string.isRequired,
  ontext: PropTypes.string.isRequired
};
