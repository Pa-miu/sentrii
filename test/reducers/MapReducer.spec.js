import { sinon, assert, expect } from '../test_exports';
import reducer from '../../src/js/reducers/MapReducer';
import { SWITCH_FACTION, TOGGLE_FILTER, TOGGLE_GROUP } from '../../src/js/constants/MapConstants';

const initialState = {
  isRadiant: true,
  camp: {
    box: false,
    pull: false,
    stack: false
  },
  truesight: {
    sentry: false,
    tower: false
  },
  ward: {
    runes: false,
    offense: false,
    defense: false,
    push: false,
    utility: false
  }
};

describe('MapReducer', () => {
  it('should return the initial state', () => {
    let resultState = reducer(undefined, {});
    expect(resultState).to.eql(initialState);
  });

  it('should handle SWITCH_FACTION', () => {
    let dummyAction = {
      type: SWITCH_FACTION
    }
    let resultState = reducer(undefined, dummyAction);
    expect(resultState.isRadiant).to.eql(false);
  });

  it('should handle TOGGLE_FILTER', () => {
    let dummyAction = {
      type: TOGGLE_FILTER,
      payload: {
        group: 'ward',
        filter: 'runes'
      }
    }
    let resultState = reducer(undefined, dummyAction);
    expect(resultState.ward.runes).to.eql(true);
  });

  it('should handle TOGGLE_GROUP', () => {
    let dummyAction = {
      type: TOGGLE_GROUP,
      payload: {
        group: 'ward',
        on: true
      }
    }
    let expectedResult = {
      runes: true,
      offense: true,
      defense: true,
      push: true,
      utility: true
    }
    let resultState = reducer(undefined, dummyAction);
    expect(resultState.ward).to.eql(expectedResult);
  });
});
