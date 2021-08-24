import initialState from './initialState';
import { paintActions } from '../actions/PaintActions/PaintActionsTypes';

const paintReducer = (state = initialState, action) => {
  switch (action.type) {
    case paintActions.PUSH_ITEM_TO_STORE_ON_INITIAL_RENDER: {
      return {
        ...state,
        paintItemsOnInitialLoad: [
          ...state.paintItemsOnInitialLoad,
          action.payload,
        ],
      };
    }
    case paintActions.CLEAR_PAINT_ARRAY: {
      return {
        ...state,
        paintItemsOnInitialLoad: action.payload,
      };
    }
    default:
      return state;
  }
};

export default paintReducer;
