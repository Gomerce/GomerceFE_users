import { combineReducers } from 'redux'
import { fetchAllProductsReducer } from './products'

const rootReducer = combineReducers({ fetchAllProductsReducer })

export default rootReducer
