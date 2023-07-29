import { combineReducers } from 'redux'
import { fetchAllProductsReducer, fetchProductsBySearchReducer, fetchProductReducer } from './products'
import { cartReducer } from './cart'

const rootReducer = combineReducers({ fetchAllProductsReducer, fetchProductsBySearchReducer, fetchProductReducer, cartReducer })

export default rootReducer
