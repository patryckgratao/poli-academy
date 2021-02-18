/* eslint-disable no-fallthrough */
import { actionNames } from './actions';

export default function cart (state = {
  products: [],
  myCart: [],
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
        myCart: [...state.myCart, action.data]
      }
    }

    case actionNames.REMOVE_ONE_ITEM: {
      return;
    }

    default:
      return state;
  }
}
