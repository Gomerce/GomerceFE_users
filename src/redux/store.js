import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

const initialState = {
  cartReducer: {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) ?? []
  }
}

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(reducers, initialState, applyMiddleware(thunk))
