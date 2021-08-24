import initialState from './initialState';
import { paintActions } from '../actions/PaintActions/PaintActionsTypes';

const paintReducer = (state = initialState, action) => {
  switch (action.type) {
    case paintActions.PUSH_ITEM_TO_STORE: {
      return {
        ...state,
        paintItems: [...state.paintItems, action.payload],
      };
    }
    default:
      return state;
  }
};

export default paintReducer;
