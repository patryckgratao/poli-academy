import { actionNames } from './actions';

export default function cart (state = {}, action) {
  switch (action.type) {
    case actionNames.ADD_TO_CART: {

    }

    case actionNames.REMOVE_ONE_ITEM: {

    }

    default:
      return state;
  }
}
