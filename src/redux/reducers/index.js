import { combineReducers } from 'redux'
import { fetchAllProductsReducer, fetchProductReducer, fetchProductsBySearchReducer } from './products'
import { cartReducer } from './cart'
import { fetchAllShippingAddressesReducer } from './shipping'

const rootReducer = combineReducers({
  fetchAllProductsReducer,
  fetchProductsBySearchReducer,
  fetchProductReducer,
  cartReducer,
  fetchAllShippingAddressesReducer
})

export default rootReducer
