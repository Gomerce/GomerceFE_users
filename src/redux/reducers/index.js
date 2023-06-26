import { combineReducers } from 'redux'
import { fetchAllProductsReducer, fetchProductsBySearchReducer } from './products'

const rootReducer = combineReducers({ fetchAllProductsReducer, fetchProductsBySearchReducer })

export default rootReducer
