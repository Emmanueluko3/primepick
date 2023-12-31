import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex absolute justify-center items-center w-full h-full">
      <div className="animate-spin rounded-full h-20 w-20 border-y-4  border-customGreen"></div>
    </div>
  );
};

export default LoadingSpinner;
