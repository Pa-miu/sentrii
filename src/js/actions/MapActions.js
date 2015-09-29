import {SWITCH_FACTION, TOGGLE_FILTER, TOGGLE_ALL} from '../constants/MapConstants';

export function switchFaction() {
  return {
    type: SWITCH_FACTION
  };
};

export function toggleFilter(group, filter) {
  return {
    type: TOGGLE_FILTER,
    payload: {
      group,
      filter
    }
  };
};

export function toggleAll(group, on) {
  return {
    type: TOGGLE_ALL,
    payload: {
      group,
      on
    }
  };
};
