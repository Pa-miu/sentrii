import React, { Component, PropTypes } from 'react';

export default class ControlLabel extends Component {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.generateHeaderIcon = this.generateHeaderIcon.bind(this);
  }

  handleToggle(onOrOff) {
    if (this.props.canToggleGroup) {
      this.props.toggleGroup(this.props.label, onOrOff);
    }
  }

  generateHeaderIcon(iconClass, onOrOff) {
    return (
      <div
        className={'control-header-icon ' + ' ' + iconClass }
        onClick={this.handleToggle.bind(null, onOrOff)}
      />
    );
  }

  render() {
    const plusIcon = this.props.canToggleGroup ? this.generateHeaderIcon('ion-plus-circled', true) : null;
    const minusIcon = this.props.canToggleGroup ? this.generateHeaderIcon('ion-minus-circled', false) : null;
    return (
      <div className={'control-header-container'}>
        {plusIcon}
        <div className={'control-header-label'}>{this.props.label}</div>
        {minusIcon}
      </div>
    );
  }
}

ControlLabel.propTypes = {
  canToggleGroup: PropTypes.bool,
  label: PropTypes.string.isRequired,
  toggleGroup: PropTypes.func
};
