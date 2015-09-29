import React, { Component, PropTypes} from 'react';

export default class ControlLabel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='control-label'>{this.props.label}</div>
    );
  }
}

ControlLabel.propTypes = {
  label: PropTypes.string.isRequired
};
