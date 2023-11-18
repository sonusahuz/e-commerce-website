import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProducts } from "../utils/api";
import { ProductTypes } from "../utils";
import Modal from "../components/ui/Modal";
import OrderForm from "../components/ui/OrderForm";
export default function OrderNow() {
  const [products, setProducts] = useState<ProductTypes>();
  const { id } = useParams();
  useEffect(() => {
    getSingleProducts(`${id}`).then((res) => {
      setProducts(res);
    });
  }, []);
  return (
    <Modal>
      <div className="bg-white rounded-lg dark:bg-black dark:text-white w-[850px] h-[550px] ">
        <div className="p-2">
          <div className="flex items-center justify-between py-2">
            <h1 className="text-2xl font-bold">Enter Your Delivery Address</h1>
          </div>
          <div className="flex items-start justify-between gap-1">
            <div className="w-[400px] flex flex-col items-start justify-start gap-2">
              <img src={products?.thumbnail} alt="" className="w-full h-60" />
              <h1 className="text-2xl font-bold">{products?.title}</h1>
              <h1>
                <strong> Brand:</strong> {products?.brand}
              </h1>
              <h1>
                <strong> Description:</strong> {products?.description}
              </h1>
              <h1>
                <strong> Category :</strong> {products?.category}
              </h1>
              <h1 className="text-xl font-bold">${products?.price}</h1>
            </div>
            <div className="w-[400px]">
              <OrderForm />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
