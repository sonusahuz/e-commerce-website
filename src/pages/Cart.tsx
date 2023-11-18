import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { ShoppingCart } from "lucide-react";
import { productAction } from "../store/productSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.product.cart);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [cart]);
  return (
    <div>
      <div className="px-20 pt-20">
        {cart.length > 0 ? (
          <div>
            <h1 className="text-3xl font-bold text-center py-4">
              Total Price : $ {total}
            </h1>
            <div className="flex items-center justify-center gap-10 px-2 flex-wrap">
              {cart?.map((prod) => (
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
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          dispatch(productAction.removeToCart(prod))
                        }
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
                    </div>
                    <div className="mr-5">
                      <button
                        onClick={() =>
                          dispatch(productAction.removeToCart(prod))
                        }
                        className="px-6 rounded py-2 bg-red-700 text-white text-xs"
                      >
                        Remove
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
              <h1 className="text-2xl py-4 font-bold">Your Cart Is Empty</h1>
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
