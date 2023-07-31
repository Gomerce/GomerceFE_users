import { fetchRequest } from '../../utils/fetchers'
import { SHIPPING_KEY } from '../../constants'
import { SHIPPING_FETCH_FAIL, SHIPPING_FETCH_REQUEST, SHIPPING_FETCH_SUCCESS } from '../constants/shipping'

/**
 * fetch all shipping addresses
 * @returns {(function(*): Promise<void>)|*}
 */
const fetchAllShippingAddresses = (token) => async (dispatch) => {
  try {
    dispatch({
      type: SHIPPING_FETCH_REQUEST
    })

    const data = await fetchRequest(SHIPPING_KEY)

    dispatch({
      type: SHIPPING_FETCH_SUCCESS,
      payload: data.data
    })
  } catch (e) {
    dispatch({
      type: SHIPPING_FETCH_FAIL,
      payload: e
    })
  }
}

export { fetchAllShippingAddresses }
