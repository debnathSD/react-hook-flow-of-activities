import { paintActions } from './PaintActionsTypes';

const paintFromControlFlow = value => ({
  type: paintActions.PUSH_ITEM_TO_STORE_ON_INITIAL_RENDER,
  payload: value,
});

const clearPaintArray = value => ({
  type: paintActions.CLEAR_PAINT_ARRAY,
  payload: value,
});

export { paintFromControlFlow, clearPaintArray };
