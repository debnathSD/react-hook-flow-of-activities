import { combineReducers } from 'redux';

const initialState = {
  yo: '123'
};

const root = (action, state = initialState) => {
  return initialState;
};

const rootReducer = combineReducers({
  root
  //reducer1,
  //reducer2,
  // Future planning
  //...
});

export default rootReducer;
