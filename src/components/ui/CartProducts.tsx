import { Link } from "react-router-dom";
import { productAction } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import QuantityCounter from "./QuantityCounter";
import { CartProductsType } from "../../utils";

export default function CartProducts({ prod, buttonText }: CartProductsType) {
  const dispatch = useDispatch();
  return (
    <>
      <div key={prod.id} className="border-2 w-[800px] mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-start justify-start">
            <Link to={`/products/${prod.id}`}>
              <img
                src={prod.thumbnail}
                alt={prod.title}
                className="w-32 h-32 rounded"
              />
            </Link>
            <div className="ml-5">
              <h1 className="text-2xl font-bold">{prod.title}</h1>
              <h1 className="text-sm">{prod.category}</h1>
              <h1 className="text-sm">{prod.rating}</h1>
              <h1 className="text-xl font-bold">${prod.price}</h1>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <QuantityCounter prod={prod} />
          </div>
          <div className="mr-5">
            <button
              onClick={() => dispatch(productAction.removeToCart(prod))}
              className="px-6 rounded py-2 bg-red-700 text-white text-xs"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
