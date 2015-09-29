import React, {Component, ProtoType} from 'react';

export default class FilterToggle extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="filter-toggle">{this.props.name}</div>
    );
  }
}
