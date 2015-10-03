import { sinon, assert, expect } from '../test_exports';
import { switchFaction, toggleFilter, toggleGroup } from '../../src/js/actions/MapActions';
import { SWITCH_FACTION, TOGGLE_FILTER, TOGGLE_GROUP } from '../../src/js/constants/MapConstants';

describe('MapActions', () => {
  it('should create an action to switch the faction', () => {
    let expectedResult = {
      type: SWITCH_FACTION
    }
    expect(switchFaction()).to.eql(expectedResult);
  })

  it('should create an action to toggle the runes filter', () => {
    let expectedResult = {
      type: TOGGLE_FILTER,
      payload: {
        group: 'ward',
        filter: 'runes'
      }
    }
    expect(toggleFilter('ward', 'runes')).to.eql(expectedResult);
  })

  it('should create an action to toggle on the ward group', () => {
    let expectedResult = {
      type: TOGGLE_GROUP,
      payload: {
        group: 'ward',
        on: true
      }
    }
    expect(toggleGroup('ward', true)).to.eql(expectedResult);
  })

  it('should create an action to toggle off the ward group', () => {
    let expectedResult = {
      type: TOGGLE_GROUP,
      payload: {
        group: 'ward',
        on: false
      }
    }
    expect(toggleGroup('ward', false)).to.eql(expectedResult);
  })
});
