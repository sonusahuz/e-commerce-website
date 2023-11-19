import { productAction } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import { CartProductsType } from "../../utils";

export default function QuantityCounter({ prod }: CartProductsType) {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(productAction.removeToCart(prod))}
        className="px-4 py-2 bg-black text-white font-bold rounded-full"
      >
        -
      </button>
      <h1 className="px-4 py-2 bg-gray-200 text-black font-bold rounded-full">
        {prod.quantity}
      </h1>
      <button
        onClick={() => dispatch(productAction.addToCart(prod))}
        className="px-4 py-2 bg-black text-white font-bold rounded-full"
      >
        +
      </button>
    </>
  );
}
