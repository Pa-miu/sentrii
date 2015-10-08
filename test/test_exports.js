import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const { assert, expect } = chai;

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
