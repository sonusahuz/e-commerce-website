import axios from "axios";
export const BASE_URL = "https://dummyjson.com/products";
export const IMG_URL = `https://i.dummyjson.com/data/products`;
// GET	/products	// get all products ✅
export const getProducts = async () => {
  const res = await axios.get(BASE_URL);
  return res.data.products;
};

// GET	/products/1	// get single product ✅
export const getSingleProducts = async (url: string) => {
  const res = await axios.get(`${BASE_URL}/${url}`);
  return res.data;
};

// GET	/products/categories	// get product categories ✅
export const getAllCategories = async (url: string) => {
  const res = await axios.get(`${BASE_URL}/${url}`);
  return res.data;
};

// GET	/products/category/smartphones	// get products of a category ✅
export const getSingleCatgeory = async (url: string) => {
  const res = await axios.get(`${BASE_URL}/category/${url}`);
  return res.data.products;
};

export const getAllCategory = async (url: string) => {
  const res = await axios.get(`${BASE_URL}/${url}`);
  return res.data;
};

// GET	/products/search?q=Laptop	// search products ✅
export const getSearchProducts = async (url: string) => {
  const res = await axios.get(`${BASE_URL}/search?q=${url}`);
  return res.data.products;
};
