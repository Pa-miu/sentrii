import {TOGGLE_FACTION, TOGGLE_FILTER, SWITCH_ALL} from '../constants/MapConstants';
import React from 'react/addons'
let update = React.addons.update;

const initialState = {
  isRadiant: true,
  wardFilters: {
    runes: false,
    offense: false,
    defense: false,
    push: false,
    utility: false
  },
  campFilters: {
    spawn: false,
    camp: false,
    stack: false
  },
  truesightFilters: {
    sentry: false,
    tower: false
  },
};

let toggleFactionHelper = function (state){
  return {
    ...state,
    isRadiant: !state.isRadiant
  };
}

let toggleFilterHelper = function(state, action){
  let group = action.payload.group,
      filter = action.payload.filter;
  let newGroup = update(state[group], {
    [filter]:{$set: !state[group][filter]}
  });
  return {...state, [group]: newGroup};
}

let switchAllHelper = function(state, action){
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
    case TOGGLE_FACTION:
      return toggleFactionHelper(state);
    case TOGGLE_FILTER:
      return toggleFilterHelper(state, action);
    case SWITCH_ALL:
      return switchAllHelper(state, action);
    default:
      return state;
  };
};
