import {TOGGLE_FACTION, TOGGLE_FILTER, SWITCH_ALL} from '../constants/MapConstants';

export function toggleFaction() {
  return {
    type: TOGGLE_FACTION
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

export function switchAll(group, on) {
  return {
    type: SWITCH_ALL,
    payload: {
      group,
      on
    }
  };
};
