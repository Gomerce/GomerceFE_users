// Use keys as endpoints
export const PRODUCTS_KEY = '/products'

export const PRODUCT_KEY = (id) => {
  return `/products/${id}`
}

export const CATEGORIES_KEY = '/categories'
export const SHIPPING_KEY = '/shipping_addresses'
export const PAYMENT_KEY = '/payment_details'
export const ORDERS_KEY = '/orders'
