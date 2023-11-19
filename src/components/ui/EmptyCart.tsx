import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface EmptyCartProps {
  emptyText: string;
  buttonText: string;
}
export default function EmptyCart({ emptyText, buttonText }: EmptyCartProps) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <ShoppingCart size={100} className="mx-auto" />
        <h1 className="text-2xl py-4 font-bold">{emptyText}</h1>
        <button
          onClick={() => navigate("/")}
          className=" bg-black text-white rounded text-sm px-4 py-2"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
