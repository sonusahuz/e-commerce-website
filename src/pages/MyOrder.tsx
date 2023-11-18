import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { ShoppingCart } from "lucide-react";
import { productAction } from "../store/productSlice";

export default function MyOrder() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.order);
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-20 pt-20">
        <div>
          <h1 className="text-center font-bold text-3xl py-4">Your Order</h1>
        </div>
        {products.length > 0 ? (
          <div>
            <div className="flex items-center justify-center gap-10 px-2 flex-wrap">
              {products?.map((prod) => (
                <div key={prod.id} className="border-2 w-[800px]">
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
                    <div className="mr-5">
                      <button
                        onClick={() =>
                          dispatch(productAction.removeToCart(prod))
                        }
                        className="px-6 rounded py-2 bg-red-700 text-white text-xs"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex  text-center items-center justify-center mx-auto h-[80vh]">
            <div>
              <ShoppingCart size={100} className="mx-auto" />
              <h1 className="text-2xl py-4 font-bold">
                No item has been order
              </h1>
              <button
                onClick={() => navigate("/")}
                className=" bg-black text-white rounded text-sm px-4 py-2"
              >
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
