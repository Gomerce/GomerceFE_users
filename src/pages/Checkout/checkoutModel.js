export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required'
    },
    deliveryAddress: {
      name: 'deliveryAddress',
      label: 'Delivery address*',
      requiredErrorMsg: 'Delivery address is required'
    },
    mobile: {
      name: 'mobile',
      label: 'Mobile number*',
      requiredErrorMsg: 'Mobile number is required'
    },
    city: {
      name: 'city',
      label: 'City*',
      requiredErrorMsg: 'City is required'
    },
    state: {
      name: 'state',
      label: 'State/Province/Region',
      requiredErrorMsg: 'State/Province/Region is required'
    },
    country: {
      name: 'country',
      label: 'Country*',
      requiredErrorMsg: 'Country is required'
    },
    additionalInfo: {
      name: 'additionalInfo',
      label: 'Additional Info',
      requiredErrorMsg: 'Additional info is required'
    },
    shippingAddress: {
      name: 'shippingAddress',
      label: 'Shipping address*',
      requiredErrorMsg: 'Shipping address is required'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      requiredErrorMsg: 'Name on card is required'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
}
