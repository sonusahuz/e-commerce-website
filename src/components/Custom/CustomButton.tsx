import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  buttonText?: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  type = "button",
  loading = false,
  buttonText = "Button Text",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-2 py-3 text-sm bg-black w-40 text-white rounded ${className}`}
      disabled={loading}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
