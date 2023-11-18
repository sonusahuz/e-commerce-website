import { Star } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AddToCartButton from "../Custom/AddToCartButton";
import { ProductTypes } from "../../utils";

interface PropsType {
  prod: ProductTypes;
}
export default function ProductCard({ prod }: PropsType) {
  const cart = useSelector((state: RootState) => state.product.cart);
  return (
    <>
      <img src={prod.thumbnail} alt="" className="w-60 h-48 " />
      <h1 className="text-xl font-bold truncate overflow-hidden whitespace-nowrap px-1">
        {prod.title}
      </h1>
      <div className="flex items-center justify-between px-1 py-4">
        <h1 className="text-xl font-bold">${prod.price}</h1>
        <div className="flex items-center justify-center gap-2 bg-green-700 px-2 py-1 rounded">
          <span className="text-sm text-white"> {prod.rating}</span>
          <Star color="white" size={16} />
        </div>
        <AddToCartButton
          isCart={cart.some((p) => p.id === prod.id)}
          data={prod}
        />
      </div>
    </>
  );
}
