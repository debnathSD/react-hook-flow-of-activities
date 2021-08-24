import { paintActions } from './PaintActionsTypes';

const paintFromControlFlow = value => ({
  type: paintActions.PUSH_ITEM_TO_STORE,
  payload: value,
});

export { paintFromControlFlow };
