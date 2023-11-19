import { useNavigate, useParams } from "react-router-dom";
import { FormDataType, formDataType, getInputFields } from "../../utils";
import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import CustomButton from "../Custom/CustomButton";
import CustomInput from "../Custom/CustomInput";
import Modal from "./Modal";

export default function OrderForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>(formDataType);
  const inputFields = getInputFields(formData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate(`/payment`);
    }, 2000);
  };

  return (
    <Modal>
      <div className="bg-white p-4 w-[500px] rounded">
        <h1 className="text-center py-4 font-bold text-2xl">
          Enter Your Delivery Address
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-4"
        >
          {inputFields.map((field, index) => (
            <CustomInput
              key={index}
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={handleChange}
              label={field.label}
            />
          ))}
          <div className="flex items-center justify-between w-full">
            <CustomButton
              buttonText="Cancel"
              onClick={() => navigate(-1)}
              className="px-2 py-3 text-sm w-36 bg-black  text-white rounded"
            />
            <button
              type="submit"
              className="px-2 py-3 text-sm w-36 bg-black  text-white rounded"
            >
              {loading ? (
                <Spinner
                  color="blue"
                  className="flex items-center text-white justify-center mx-auto"
                />
              ) : (
                "Proceed to Payment"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
