import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import EmptyCart from "../components/ui/EmptyCart";
import CartProducts from "../components/ui/CartProducts";
import CartOrderDetails from "../components/ui/CartOrderDetails";

export default function Cart() {
  const [total, setTotal] = useState<number>(0);
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
            <div className="flex items-start justify-center gap-10 px-2 flex-wrap">
              <div className="">
                {cart?.map((prod) => (
                  <CartProducts prod={prod} buttonText="Remove" />
                ))}
              </div>
              <div className="border-2 w-80 p-4">
                <CartOrderDetails totalPrice={total} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex  text-center items-center justify-center mx-auto h-[80vh]">
            <EmptyCart
              emptyText={"Your Cart Is Empty"}
              buttonText={"Shop Now"}
            />
          </div>
        )}
      </div>
    </div>
  );
}
