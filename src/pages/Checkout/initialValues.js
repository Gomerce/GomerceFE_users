import checkoutFormModel from './checkoutModel'
const {
  formField: {
    firstName,
    lastName,
    deliveryAddress,
    cardNumber,
    nameOnCard,
    additionalInfo,
    city,
    expiryDate,
    cvv,
    mobile,
    shippingAddress,
    state
  }
} = checkoutFormModel

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [deliveryAddress.name]: '',
  [city.name]: '',
  [additionalInfo.name]: '',
  [state.name]: '',
  [mobile.name]: '',
  [shippingAddress.name]: '',
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [expiryDate.name]: '',
  [cvv.name]: ''
}
