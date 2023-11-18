import { object, string, number, date, InferType } from "yup";
export const category = [
  {
    id: "1",
    name: "Shoes",
    url: "mens-shoes",
    image: "/shoes.webp",
  },
  {
    id: "2",
    name: "Bags",
    url: "womens-bags",
    image: "/bags.webp",
  },
  {
    id: "3",
    name: "Watches",
    url: "mens-watches",
    image: "/watch.jpg",
  },
  {
    id: "4",
    name: "Phones",
    url: "smartphones",
    image: "/phones.jpg",
  },
  {
    id: "5",
    name: "Laptops",
    url: "laptops",
    image: "/laptops.webp",
  },
  {
    id: "6",
    name: "Shirts",
    url: "mens-shirts",
    image: "/shirts.webp",
  },
];

export interface ProductTypes {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  brand: string;
  images?: string[];
  rating: number;
  quantity: number;
}
export interface Product {
  products: ProductTypes[];
}

interface InitialStateType {
  page: number;
  prodCategory: string;
  searchProduct: string;
  cart: ProductTypes[];
  isLogin: boolean;
  order: ProductTypes[];
}

export const initialState: InitialStateType = {
  page: 1,
  prodCategory: "smartphones",
  searchProduct: "",
  cart: [],
  isLogin: false,
  order: [],
};

export interface FormDataType {
  fullName: string;
  email: string;
  pinCode: string;
  phoneNumber: string;
  district: string;
  state: string;
  city: string;
}

export const formDataType: FormDataType = {
  fullName: "",
  email: "",
  pinCode: "",
  phoneNumber: "",
  district: "",
  state: "",
  city: "",
};
