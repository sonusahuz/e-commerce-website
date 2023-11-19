export const getInputFields = (formData: FormDataType) => {
  return [
    {
      type: "text",
      name: "fullName",
      value: formData.fullName,
      label: "Full Name",
    },
    { type: "email", name: "email", value: formData.email, label: "Email" },
    {
      type: "number",
      name: "phoneNumber",
      value: formData.phoneNumber,
      label: "Phone Number",
    },
    {
      type: "number",
      name: "pinCode",
      value: formData.pinCode,
      label: "Pin Code",
    },
    { type: "text", name: "city", value: formData.city, label: "City" },
    {
      type: "text",
      name: "district",
      value: formData.district,
      label: "District",
    },
    { type: "text", name: "state", value: formData.state, label: "State" },
  ];
};

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
  prodCategory: string;
  searchProduct: string;
  cart: ProductTypes[];
  isLogin: boolean;
  order: ProductTypes[];
}

export const initialState: InitialStateType = {
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

export interface CartProductsType {
  prod: {
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
  };
  buttonText?: string;
}
