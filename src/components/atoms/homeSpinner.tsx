import React from "react";

const HomeSpinner: React.FC = () => {
  return (
    <div className="flex fixed justify-center items-center w-full h-full">
      <div className="animate-spin rounded-full h-20 w-20 border-y-4  border-customGreen"></div>
    </div>
  );
};

export default HomeSpinner;
