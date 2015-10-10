import { SWITCH_FACTION, TOGGLE_FILTER, TOGGLE_GROUP } from '../constants/MapConstants';

/*
  Associated with the FactionSwitch component
  Changes whether the map should display from the perspective of radiant or dire
*/
export function switchFaction() {
  return {
    type: SWITCH_FACTION
  };
}

/*
  Associated wtih the FilterToggle component
  Changes whether a category of nodes (rune wards, push wards, etc) should be shown
*/
export function toggleFilter(group, filter) {
  return {
    type: TOGGLE_FILTER,
    payload: {
      group,
      filter
    }
  };
}

/*
  Associated wtih the ControlLabel component
  Changes whether an entire group of filters (wards, camps, etc) should be shown
*/
export function toggleGroup(group, on) {
  return {
    type: TOGGLE_GROUP,
    payload: {
      group,
      on
    }
  };
}
