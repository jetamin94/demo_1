
import { combineReducers, createStore } from 'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
  articlesState: Reducer
});

export const store = createStore(rootReducer);