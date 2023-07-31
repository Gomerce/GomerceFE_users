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
    address: {
      name: 'address',
      label: 'Delivery address*',
      requiredErrorMsg: 'Delivery Address is required'
    },
    mobile: {
      name: 'mobile',
      label: 'Mobile number',
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
      label: 'Additional info*'
    }
  }
}
