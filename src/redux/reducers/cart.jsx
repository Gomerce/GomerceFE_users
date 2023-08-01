import { ADD_TO_CART, DELETE_FROM_CART } from '../constants/cart'

/**
 * update cart
 * @param state
 * @param action: {type: string, payload: []}
 */
const cartReducer = (state = { cartItems: ['item1'] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state, cartItems: [...state.cartItems, action.payload]
      }
    case DELETE_FROM_CART:
      return {
        ...state, cartItems: state.cartItems.filter(obj => obj.id !== action.payload.id)
      }
    default:
      return state
  }
}

export { cartReducer }
