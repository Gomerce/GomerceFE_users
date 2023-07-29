import { combineReducers } from 'redux'
import { fetchAllProductsReducer, fetchProductsBySearchReducer, fetchProductReducer } from './products'

const rootReducer = combineReducers({ fetchAllProductsReducer, fetchProductsBySearchReducer, fetchProductReducer })

export default rootReducer
