import { useNavigate, useParams } from "react-router-dom";
import { FormDataType, formDataType } from "../../utils";
import { Input, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import CustomButton from "../Custom/CustomButton";
import CustomInput from "../Custom/CustomInput";

export default function OrderForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [formData, setFormData] = useState<FormDataType>(formDataType);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate(`/products/${id}/payment`);
    }, 3000);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col gap-4"
      >
        <CustomInput
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          label="fullName"
        />
        <CustomInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="email"
        />
        <CustomInput
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          label="Phone Number"
        />
        <CustomInput
          type="number"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          label="Pin Code"
        />
        <CustomInput
          type="text"
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
          label="District"
        />
        <CustomInput
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          label="State"
        />
        <div className="flex items-center justify-between w-full">
          <CustomButton
            buttonText="Cancel"
            onClick={() => navigate(-1)}
            className="px-2 py-3 text-sm bg-black w-40 text-white rounded"
          />
          <button
            type="submit"
            className="px-2 py-3 text-sm bg-black w-40 text-white rounded"
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
    </>
  );
}
