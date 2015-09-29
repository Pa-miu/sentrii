import React, { Component } from 'react';

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='footer-background'>
        <div className='footer-container'>
          <div className='copyright'>
            Copyright {new Date().getFullYear()}. Dota 2 is a registered trademark of Valve Corporation.
          </div>
        </div>
      </div>
    );
  }
}
