import {
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_REQUEST, PRODUCT_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS, PRODUCTS_SEARCH_FETCH_FAIL, PRODUCTS_SEARCH_FETCH_REQUEST, PRODUCTS_SEARCH_FETCH_SUCCESS
} from '../constants/product'
import { fetchRequest } from '../../utils/fetchers'
import { PRODUCT_KEY, PRODUCTS_KEY } from '../../constants'

/**
 * fetch all products
 * @returns {(function(*): Promise<void>)|*}
 */
const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_FETCH_REQUEST
    })

    const data = await fetchRequest(PRODUCTS_KEY)

    dispatch({
      type: PRODUCTS_FETCH_SUCCESS,
      payload: data.data
    })
  } catch (e) {
    dispatch({
      type: PRODUCTS_FETCH_FAIL,
      payload: e
    })
  }
}

/**
 * fetch product by id
 * @returns {(function(*): Promise<void>)|*}
 */
const fetchProductById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_FETCH_REQUEST
    })

    const data = await fetchRequest(PRODUCT_KEY(id))

    dispatch({
      type: PRODUCT_FETCH_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: PRODUCT_FETCH_FAIL,
      payload: e
    })
  }
}

/**
 * fetch products by search query
 * @param search: string
 */
const fetchProductsBySearch = (search) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_SEARCH_FETCH_REQUEST
    })
    const data = await fetchRequest(PRODUCTS_KEY)

    dispatch({
      type: PRODUCTS_SEARCH_FETCH_SUCCESS,
      payload: data.data
    })
  } catch (error) {
    dispatch({
      type: PRODUCTS_SEARCH_FETCH_FAIL,
      payload: error.message
    })
  }
}

export { fetchAllProducts, fetchProductsBySearch, fetchProductById }
