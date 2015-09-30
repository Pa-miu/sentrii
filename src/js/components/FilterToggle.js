import React, { Component, PropTypes } from 'react';

export default class FilterToggle extends Component {
  constructor() {
    super();
  }

  render() {
    const { label } = this.props;
    return (
      <div className={'filter-toggle ' + label}>
        {label}
      </div>
    );
  }
}

FilterToggle.propTypes = {
  label: PropTypes.string.isRequired
};
