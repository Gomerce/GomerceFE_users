import {
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_REQUEST, PRODUCT_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS, PRODUCTS_SEARCH_FETCH_FAIL, PRODUCTS_SEARCH_FETCH_REQUEST, PRODUCTS_SEARCH_FETCH_SUCCESS
} from '../constants/product'

/**
 * fetch all products
 * @param state
 * @param action: {type: string, payload: []}
 */
const fetchAllProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUEST:
      return {
        loading: true
      }
    case PRODUCTS_FETCH_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
    case PRODUCTS_FETCH_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

/**
 * fetch all products
 * @param state
 * @param action: {type: string, payload: []}
 */
const fetchProductsBySearchReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCTS_SEARCH_FETCH_REQUEST:
      return {
        loading: true
      }
    case PRODUCTS_SEARCH_FETCH_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
    case PRODUCTS_SEARCH_FETCH_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

/**
 * fetch single products
 * @param state
 * @param action: {type: string, payload: []}
 */
const fetchProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return {
        loading: true
      }
    case PRODUCT_FETCH_SUCCESS:
      return {
        loading: false,
        product: action.payload
      }
    case PRODUCT_FETCH_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export { fetchAllProductsReducer, fetchProductsBySearchReducer, fetchProductReducer }
