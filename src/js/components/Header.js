import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='header-container row no-select'>
        <div className='title-group col-3-4'>
          <div className='title'>Sentrii</div>
          <div className='subtitle'>A visual reference to warding in Dota 2</div>
        </div>
        <div className='navbar col-1-4'>
          <div className='nav-item'>Map</div>
          <div className='nav-item closed'>Draw</div>
          <div className='nav-item closed'>Parse</div>
        </div>
      </div>
    );
  }
}
