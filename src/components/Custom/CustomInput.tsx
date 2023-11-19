import { Input } from "@material-tailwind/react";

interface CustomInputProps {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  type: "text" | "number" | "email" | string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  onChange,
  value,
  type,
  name,
}) => {
  return (
    <div className="w-full">
      <Input
        crossOrigin="true"
        type={type}
        name={name}
        label={label}
        value={value}
        size="lg"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default CustomInput;
