import React, { Component, PropTypes } from 'react';

export default class FilterToggle extends Component {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggleFilter(this.props.group, this.props.label);
  }

  render() {
    const { label } = this.props;
    const highlight = this.props.isActive ? 'highlight' : null;
    return (
      <div className={'filter-toggle ' + label + ' ' + highlight} onClick={this.handleToggle}>
        {label}
      </div>
    );
  }
}

FilterToggle.propTypes = {
  group: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  toggleFilter: PropTypes.func.isRequired
};
