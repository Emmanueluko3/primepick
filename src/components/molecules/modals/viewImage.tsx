import { ReactNode, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed w-full h-full inset-0 z-[70] flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 z-[80] bg-black bg-opacity-50 flex items-center justify-center text-white"
      ></div>
      <div className="w-[80%] lg:w-auto lg:h-auto bg-white p-3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] rounded-lg">
        <span
          onClick={onClose}
          className="text-white text-xl cursor-pointer z-[6] h-8 w-8 bg-customGreen p-1 font-extrabold rounded-full absolute right-1 top-1 flex items-center justify-center"
        >
          X
        </span>
        {children}
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
