import { put, all, call, takeLatest } from "redux-saga/effects";

import { actionNames, getProductsFailure, getProductsSuccess, getStockFailure, getStockSuccess } from "./actions";

import api from "../../../services/api";

// Requisição assíncrona para puxar lista de produtos
function* getProductsRequest(event) {
  try {
    const result = yield call(api.getAllProducts);

    yield put(getProductsSuccess(result.data));
  } catch (error) {
    console.log(error);
    yield put(getProductsFailure(error));
  }
}

// Requisição assíncrona para puxar lista de estoque
function* getStockRequest(event) {
  try {
    const result = yield call(api.getAllStock);

    yield put(getStockSuccess(result.data));
  } catch (error) {
    console.log(error);
    yield put(getStockFailure(error));
  }
}

export default all([
  takeLatest(actionNames.GET_PRODUCTS, getProductsRequest),
  takeLatest(actionNames.GET_STOCK, getStockRequest),
]);

