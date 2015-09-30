import React, { Component, PropTypes } from 'react';

export default class ControlLabel extends Component {
  constructor() {
    super();
  }

  render() {
    const toggleGroup = this.props.canToggleGroup ? ' toggle-group' : '';
    return (
      <div className={'control-label' + toggleGroup}>{this.props.label}</div>
    );
  }
}

ControlLabel.propTypes = {
  canToggleGroup: PropTypes.bool,
  label: PropTypes.string.isRequired
};
