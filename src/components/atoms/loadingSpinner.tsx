import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-y-2  border-customGreen"></div>
    </div>
  );
};

export default LoadingSpinner;
