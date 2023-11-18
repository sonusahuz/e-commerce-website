import Modal from "../components/ui/Modal";
import { useNavigate } from "react-router-dom";

export default function SuccessOrder() {
  const navigate = useNavigate();
  return (
    <Modal>
      <div className="flex items-center w-[600px] justify-center h-[500px] rounded bg-white">
        <div className="text-center">
          <img src="/success.gif" alt="" className="w-72 block mx-auto" />
          <h1
            className="text-4xl
           font-bold"
          >
            Order Placed Successfully! 🚀
          </h1>
          <h1>
            10 Super Coins on the way <br />
            ₹935 Saved, Yay!
          </h1>
          <button
            onClick={() => navigate("/my-order")}
            className="px-10 my-4 rounded py-3 bg-black text-white text-sm"
          >
            Track Order
          </button>
        </div>
      </div>
    </Modal>
  );
}
