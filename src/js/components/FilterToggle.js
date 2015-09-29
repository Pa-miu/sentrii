import React, { Component, PropTypes } from 'react';

export default class FilterToggle extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='filter-toggle'>{this.props.name}</div>
    );
  }
}

FilterToggle.propTypes = {
  name: PropTypes.string.isRequired
};
