import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMG_URL, getSingleProducts } from "../utils/api";
import { ProductTypes } from "../utils";
import AddToCartButton from "../components/Custom/AddToCartButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function SingleProduct() {
  const [products, setProducts] = useState<ProductTypes>();
  const cart = useSelector((state: RootState) => state.product.cart);
  const isLogin = useSelector((state: RootState) => state.product.isLogin);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleOrder = () => {
    if (isLogin) {
      navigate(`/order`);
    } else {
      navigate("/login");
    }
  };
  const [images, setImages] = useState(`${IMG_URL}/${id}/thumbnail.jpg`);
  useEffect(() => {
    getSingleProducts(`${id}`).then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="px-36 pt-20 flex items-center justify-center h-screen mx-auto">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center justify-between">
          <div>
            {products?.images?.map((item, index) => (
              <img
                src={item}
                alt={products.title}
                className="w-20 h-20 my-4 cursor-pointer"
                onClick={() => setImages(item)}
                key={index}
              />
            ))}
          </div>
          <div className="mx-20">
            <img src={images} alt="" className="w-96 h-96" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{products?.title}</h1>
          <p className="text-sm py-2 w-[500px]">{products?.description}</p>
          <h1 className="py-2">Category: {products?.category}</h1>
          <h1 className="py-2">Brand: {products?.brand}</h1>
          <h1 className="py-2">Rating: {products?.rating}</h1>
          <h2 className="py-2 font-bold text-3xl">${products?.price}</h2>
          <div className="flex items-center justify-start gap-8 pt-10">
            <AddToCartButton
              isCart={cart.some((p) => p.id === products?.id)}
              data={products}
            />

            <button
              onClick={handleOrder}
              className="px-6 rounded py-2 bg-black text-white text-xs"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
