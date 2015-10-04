import { createStore } from 'redux';
import mapReducer from '../reducers/MapReducer';

export default function configureStore(initialState) {
  const store = createStore(mapReducer, initialState);
  return store;
}
