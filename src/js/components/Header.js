import React, {Component, ProtoType} from 'react';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header-background">
        <div className="header-container">
          <div className="title-group">
            <div className="title">Sentrii</div>
            <div className="subtitle">A visual reference to warding in Dota 2</div>
          </div>
          <div className="navbar">
            <div className="nav-item">Map</div>
            <div className="nav-item">Draw</div>
            <div className="nav-item">Parse</div>
          </div>
        </div>
      </div>
    );
  }
}
