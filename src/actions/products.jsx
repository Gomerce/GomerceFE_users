import * as api from "../api";
import {
  FETCH_ALL,
  FETCH_CATEGORIES,
  SEARCH_RESULTS,
} from "../constants/actionTypes";
//Action creators
const getProducts = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts(page);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const getProductCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsCategories();
    dispatch({ type: FETCH_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const getSearchProduct = (searchTerm) => async (dispatch) => {
  try {
    const { data } = await api.fetchSearchProduct(searchTerm);
    dispatch({ type: SEARCH_RESULTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export { getProducts, getProductCategories, getSearchProduct };
