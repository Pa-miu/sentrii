import React from 'react/addons';
import { SWITCH_FACTION, TOGGLE_FILTER, TOGGLE_ALL } from '../constants/MapConstants';

const update = React.addons.update;

const initialState = {
  isRadiant: true,          // Expressed as 'radiant' or 'dire' in the UI
  campFilters: {            // Filters for campFilters
    spawn: false,
    camp: false,
    stack: false
  },
  truesightFilters: {        // Filters for truesightFilters
    sentry: false,
    tower: false
  },
  wardFilters: {            // Filters for wardFilters
    runes: false,
    offense: false,
    defense: false,
    push: false,
    utility: false
  }
};

const switchFactionHelper = function switchFactionHelper(state) {
  return {
    ...state,
    isRadiant: !state.isRadiant
  };
};

const toggleFilterHelper = function toggleFilterHelper(state, action) {
  const group = action.payload.group;
  const filter = action.payload.filter;
  const newGroup = update(state[group], {
    [filter]: { $set: !state[group][filter] }
  });
  return { ...state, [group]: newGroup };
};

const toggleAllHelper = function toggleAllHelper(state, action) {
  const group = action.payload.group;
  const on = action.payload.on;
  const newGroup = update({}, { $merge: state[group] });
  for (const key in newGroup) {
    newGroup[key] = on;
  }
  return { ...state, [group]: newGroup };
};

export default function MapReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_FACTION:
      return switchFactionHelper(state);
    case TOGGLE_FILTER:
      return toggleFilterHelper(state, action);
    case TOGGLE_ALL:
      return toggleAllHelper(state, action);
    default:
      return state;
  }
}
