export const actionNames = {
  GET_PRODUCTS: '@CART/GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: '@CART/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: '@CART/GET_PRODUCTS_FAILURE',

  GET_STOCK: '@CART/GET_STOCK',
  GET_STOCK_SUCCESS: '@CART/GET_STOCK_SUCCESS',
  GET_STOCK_FAILURE: '@CART/GET_STOCK_FAILURE',

  ADD_TO_CART: '@CART/ADD_TO_CART',
  REMOVE_ONE_ITEM: '@CART/REMOVE_ONE_ITEM',
  DELETE_ALL_ITEMS: '@CART/DELETE_ALL_ITEMS',

};

export function getProducts() {
  return {
    type: actionNames.GET_PRODUCTS,
  }
}

export function getProductsSuccess(data) {
  return {
    type: actionNames.GET_PRODUCTS_SUCCESS,
    data,
  }
}

export function getProductsFailure(error) {
  return {
    type: actionNames.GET_PRODUCTS_FAILURE,
    error,
  }
}

export function getStock() {
  return {
    type: actionNames.GET_STOCK,
  }
}

export function getStockSuccess(data) {
  return {
    type: actionNames.GET_STOCK_SUCCESS,
    data,
  }
}

export function getStockFailure(error) {
  return {
    type: actionNames.GET_STOCK_FAILURE,
    error,
  }
}

export function addToCart(data) {
  return {
    type: actionNames.ADD_TO_CART,
    data,
  }
}

export function removeOneItem(data) {
  console.log('oi')
  return {
    type: actionNames.REMOVE_ONE_ITEM,
    data,
  }
}

export function deleteAllItems(id) {
  return {
    type: actionNames.DELETE_ALL_ITEMS,
    id
  }
}

