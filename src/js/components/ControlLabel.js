import React, {Component, ProtoType} from 'react';

export default class ControlLabel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="control-label">{this.props.label}</div>
    );
  }
}
