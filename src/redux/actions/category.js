import { fetchRequest } from '../../utils/fetchers'
import { CATEGORIES_KEY } from '../../constants'
import { CATEGORIES_FETCH_FAIL, CATEGORIES_FETCH_REQUEST, CATEGORIES_FETCH_SUCCESS } from '../constants/category'

/**
 * fetch all products
 * @returns {(function(*): Promise<void>)|*}
 */
const fetchAllCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORIES_FETCH_REQUEST
    })

    const data = await fetchRequest(CATEGORIES_KEY)

    dispatch({
      type: CATEGORIES_FETCH_SUCCESS,
      payload: data.data
    })
  } catch (e) {
    dispatch({
      type: CATEGORIES_FETCH_FAIL,
      payload: e
    })
  }
}

export { fetchAllCategories }
