import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="rounded-full flex items-center justify-center hover:opacity-90 text-white font-medium w-full h-full border-gray-300 py-2 px-6 bg-customGreen"
    >
      {children}
    </button>
  );
};

export default Button;
