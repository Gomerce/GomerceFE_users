import { SHIPPING_FETCH_FAIL, SHIPPING_FETCH_REQUEST, SHIPPING_FETCH_SUCCESS } from '../constants/shipping'

/**
 * fetch all shipping addresses
 * @param state
 * @param action: {type: string, payload: []}
 */
const fetchAllShippingAddressesReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPING_FETCH_REQUEST:
      return {
        loading: true
      }
    case SHIPPING_FETCH_SUCCESS:
      return {
        loading: false,
        shippingAddresses: action.payload
      }
    case SHIPPING_FETCH_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export { fetchAllShippingAddressesReducer }
