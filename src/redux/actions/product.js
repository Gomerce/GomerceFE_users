import {
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS, PRODUCTS_SEARCH_FETCH_FAIL, PRODUCTS_SEARCH_FETCH_REQUEST, PRODUCTS_SEARCH_FETCH_SUCCESS
} from '../constants/product'
import { fetchRequest } from '../../utils/fetchers'
import { PRODUCTS_KEY } from '../../constants'

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

export { fetchAllProducts, fetchProductsBySearch }
