import React from 'react/addons';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

let { assert, expect } = chai,
    { TestUtils } = React.addons;

chai.use(sinonChai);

export {
  React,
  chai,
  sinon,
  sinonChai,
  assert,
  expect,
  TestUtils
}

/*
 Add the following code to import necessary modules to test specs
  import { React, sinon, assert, expect, TestUtils } from '../test_exports';
*/
