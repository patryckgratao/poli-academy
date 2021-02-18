/* eslint-disable no-fallthrough */
import { actionNames } from './actions';

export default function cart (state = {
  products: [],
  myCart: {
    items: [],
    quantity: 0,
  },
  stock: [],
}, action) {
  switch (action.type) {
    case actionNames.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        ...{
          products: action.data,
        }
      }
    }

    case actionNames.GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        ...{
          error: action.error,
        }
      }
    }

    case actionNames.GET_STOCK_SUCCESS: {
      return {
        ...state,
        ...{
          stock: action.data,
        }
      }
    }

    case actionNames.GET_STOCK_FAILURE: {
      return {
        ...state,
        ...{
          error: action.error,
        }
      }
    }

    case actionNames.ADD_TO_CART: {
      return {
        ...state,
        myCart: {
          items: [...state.myCart.items, action.data],
          quantity: action.quantity + 1
        }
      }
    }

    case actionNames.REMOVE_ONE_ITEM: {
      // const currentState = Object.assign({}, state);
      // state.myCart.splice(action.data, 1);
      state.myCart.items.splice([action.data], 1)
      state.myCart.quantity--;
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
