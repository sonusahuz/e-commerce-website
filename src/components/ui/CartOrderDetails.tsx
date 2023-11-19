import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
interface OrderDetailsProps {
  totalPrice: number;
}

const CartOrderDetails: React.FunctionComponent<OrderDetailsProps> = ({
  totalPrice,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/order`);
    }, 2000);
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Price Details</h1>
      </div>
      <div>
        <div className="flex items-center justify-between my-4">
          <h1>Price</h1>
          <span>$ {totalPrice}</span>
        </div>
        <div className="flex items-center justify-between my-4">
          <h1>Delivery Charges</h1>
          <span className="text-green-600">FREE</span>
        </div>
        <div className="flex items-center justify-between my-4">
          <h1>Amount Payable</h1>
          <span>$ {totalPrice}</span>
        </div>
        <div className="flex items-center justify-between my-4">
          <button
            onClick={handlePayment}
            className="px-1 mt-4 rounded py-3 bg-black text-white text-sm w-full"
          >
            {loading ? (
              <Spinner
                color="blue"
                className="flex items-center text-white justify-center mx-auto"
              />
            ) : (
              "Checkout"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default CartOrderDetails;
