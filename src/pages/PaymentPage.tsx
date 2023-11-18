import Modal from "../components/ui/Modal";
import { useEffect, useState } from "react";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import { FaCcMastercard, FaGoogle } from "react-icons/fa";
import { Input, Spinner } from "@material-tailwind/react";
import { BsCashCoin } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProducts } from "../utils/api";
import { useDispatch } from "react-redux";
import { productAction } from "../store/productSlice";
import CustomInput from "../components/Custom/CustomInput";
export default function PaymentMode() {
  const disptach = useDispatch();
  const [order, setOrder] = useState([]);
  const { id } = useParams();
  const [showUPI, setShowUPI] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUPI = () => {
    setShowUPI(!showUPI);
    setShowCard(false);
    setCashOnDelivery(false);
  };

  const handleCard = () => {
    setShowCard(!showCard);
    setShowUPI(false);
    setCashOnDelivery(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      disptach(productAction.orderProducts(order));
      navigate("/success");
    }, 2000);
  };

  useEffect(() => {
    getSingleProducts(`${id}`).then((res) => {
      console.log(res);
      setOrder(res);
    });
  }, []);
  return (
    <Modal>
      <div className="bg-white rounded">
        <h1 className="text-2xl font-bold pt-4 text-center">Payment Options</h1>
        <div className="flex items-center w-[350px] justify-center h-[520px] rounded-lg bg-white">
          <form action="" onSubmit={handleSubmit}>
            <div className="text-center flex items-center justify-center flex-col gap-3">
              <div
                className={`${
                  showUPI ? "border-blue-600 bg-gray-400" : null
                } flex items-center cursor-pointer justify-between border-2 rounded px-2 p-4 w-[300px]`}
                onClick={handleUPI}
              >
                <span className="text-xl font-bold">Pay Using UPI</span>
                <div className="flex items-center -space-x-4 gap-6">
                  <SiPhonepe size={20} />
                  <FaGoogle size={20} />
                  <SiPaytm size={20} />
                </div>
              </div>
              <div className="w-[300px]">
                {showUPI && (
                  <Input
                    crossOrigin="true"
                    type="text"
                    required
                    label="Enter Your UPI ID"
                    size="lg"
                  />
                )}
              </div>
              <div
                className={`${
                  showCard ? "border-blue-600 bg-gray-400" : null
                } flex items-center cursor-pointer justify-between border-2 rounded px-2 p-4 w-[300px]`}
                onClick={handleCard}
              >
                <span className="text-xl font-bold">Card</span>
                <FaCcMastercard size={20} />
              </div>
              {showCard && (
                <div className="w-[300px]">
                  <div className="flex items-center justify-between flex-col gap-2">
                    <CustomInput label="Card Number" type="number" />
                    <CustomInput label="Expiry" type="number" />
                    <CustomInput label="Card Holder Name" type="number" />
                    <CustomInput label="CVV" type="number" />
                  </div>
                </div>
              )}
              <div
                onClick={() => {
                  setCashOnDelivery(!cashOnDelivery);
                  setShowCard(false);
                }}
                className={`${
                  cashOnDelivery ? "border-blue-600 bg-gray-400" : null
                } flex items-center cursor-pointer justify-between border-2 rounded px-2 p-4 w-[300px]`}
              >
                <span className="text-xl font-bold">Cash on Delivery</span>
                <BsCashCoin size={20} />
              </div>
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={() => navigate(-1)}
                  className="px-10 my-4 rounded py-3 bg-black text-white text-sm w-36"
                >
                  Back
                </button>
                <button className="px-10 my-4 rounded py-3 bg-black text-white text-sm w-36">
                  {loading ? (
                    <Spinner
                      color="blue"
                      className="flex items-center text-white justify-center mx-auto"
                    />
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
