import React from "react";

interface AuthBtnProps {
  label: string;
  icon: string;
}

const AuthButton: React.FC<AuthBtnProps> = ({ label, icon }) => {
  return (
    <button className="border bg-[#F9F9FB] flex items-center w-full justify-center border-gray-300 rounded-lg py-2 px-5 font-medium">
      <img src={icon} className="mr-2 w-5 h-5" alt="" />
      {label}
    </button>
  );
};

export default AuthButton;
