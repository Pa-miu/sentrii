import React from 'react/addons';
import { SWITCH_FACTION, TOGGLE_FILTER, TOGGLE_GROUP } from '../constants/MapConstants';

const update = React.addons.update;

const initialState = {
  isRadiant: true,          // Expressed as 'radiant' or 'dire' in the UI
  campFilters: {            // Filters for camps
    box: false,
    pull: false,
    stack: false
  },
  truesightFilters: {        // Filters for truesight
    sentry: false,
    tower: false
  },
  wardFilters: {            // Filters for wards
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

const toggleGroupHelper = function toggleGroupHelper(state, action) {
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
    case TOGGLE_GROUP:
      return toggleGroupHelper(state, action);
    default:
      return state;
  }
}
