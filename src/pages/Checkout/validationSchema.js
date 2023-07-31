import * as Yup from 'yup'
import moment from 'moment'
import checkoutFormModel from './checkoutModel'

const {
  formField: {
    firstName,
    lastName,
    deliveryAddress,
    mobile,
    additionalInfo,
    state,
    city,
    shippingAddress,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv
  }
} = checkoutFormModel

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [deliveryAddress.name]: Yup.string().required(`${deliveryAddress.requiredErrorMsg}`),
    [city.name]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
    [mobile.name]: Yup.string().required(`${mobile.requiredErrorMsg}`),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
    [additionalInfo.name]: Yup.string()
  }),
  Yup.object().shape({
    [shippingAddress.name]: Yup.string().required(`${shippingAddress.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    [cardNumber.name]: Yup.string()
      .required(`${cardNumber.requiredErrorMsg}`)
      .matches(visaRegEx, cardNumber.invalidErrorMsg),
    [expiryDate.name]: Yup.string()
      .nullable()
      .required(`${expiryDate.requiredErrorMsg}`)
      .test('expDate', expiryDate.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date()
          const endDate = new Date(2050, 12, 31)
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate)
          }
          return false
        }
        return false
      }),
    [cvv.name]: Yup.string()
      .required(`${cvv.requiredErrorMsg}`)
      .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  })
]
