import {
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS
} from '../constants/product'
import { fetchRequest } from '../../utils/fetchers'
import { PRODUCTS_KEY } from '../../constants'

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

export { fetchAllProducts }
