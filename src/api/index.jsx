import axios from "axios";

// using fake store API as mockup data
const url = "https://fakestoreapi.com";

const fetchProducts = () => axios.get(`${url}${"/products/?limit=8"}`);
const fetchSearchProduct = (searchTerm) =>
  axios.get(`${url}/products/${searchTerm || "none"}`);
// const fetchSearchProduct = (searchTerm) =>
//   axios.get(`${url}/products/search?searchTerm=${searchTerm || "none"}`);
const fetchProductsCategories = () =>
  axios.get(`${url}${"/products/categories"}`);

export { fetchProducts, fetchProductsCategories, fetchSearchProduct };
