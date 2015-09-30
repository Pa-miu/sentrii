import React, { Component } from 'react';

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='footer-container row'>
        <div className='copyright col-3-4'>
          {'Copyright ' + new Date().getFullYear() + ' Francis Yuan. Dota 2 is a registered trademark of Valve Corporation.'}
        </div>
        <div className='links col-3-4'>
        </div>
      </div>
    );
  }
}
