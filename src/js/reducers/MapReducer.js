import React from 'react/addons'
import {SWITCH_FACTION, TOGGLE_FILTER, TOGGLE_ALL} from '../constants/MapConstants';

let update = React.addons.update;

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
  },
};

let switchFactionHelper = function (state) {
  return {
    ...state,
    isRadiant: !state.isRadiant
  };
}

let toggleFilterHelper = function(state, action) {
  let group = action.payload.group,
      filter = action.payload.filter;
  let newGroup = update(state[group], {
    [filter]:{$set: !state[group][filter]}
  });
  return {...state, [group]: newGroup};
}

let toggleAllHelper = function(state, action) {
  let group = action.payload.group,
      on = action.payload.on;
  let newGroup = update({}, {$merge: state[group]});
  for (let key in newGroup){
    newGroup[key] = on;
  }
  return {...state, [group]: newGroup};
}

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
  };
};
