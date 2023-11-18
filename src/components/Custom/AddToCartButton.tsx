import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../store/productSlice";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
export default function AddToCartButton({ isCart, data }: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.product.isLogin);
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLogin) {
      if (isCart) {
        dispatch(productAction.removeToCart(data));
      } else {
        dispatch(productAction.addToCart(data));
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      {isCart ? (
        <button
          onClick={handleAddToCart}
          className="px-6 rounded py-2 bg-red-700 text-white text-xs"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="px-6 rounded py-2 bg-black text-white text-xs"
        >
          add
        </button>
      )}
    </div>
  );
}
