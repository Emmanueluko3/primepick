import React, { useState } from "react";

interface DropdownProps {
  name: string;
  subCategories: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ name, subCategories }) => {
  const [dropdown, setDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <button
        onClick={() => setDropdown(!dropdown)}
        className="flex justify-between font-medium items-center w-full"
      >
        {name}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`h-6 w-6 font-medium transform-rotate duration-300 ease-in-out ${
            dropdown ? "rotate-180" : "rotate-0"
          }`}
        >
          <g clipPath="url(#clip0_146_2033)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7071 15.707C12.5196 15.8944 12.2653 15.9998 12.0001 15.9998C11.7349 15.9998 11.4806 15.8944 11.2931 15.707L5.6361 10.05C5.54059 9.95773 5.46441 9.84739 5.412 9.72538C5.35959 9.60338 5.332 9.47216 5.33085 9.33938C5.32969 9.2066 5.355 9.07492 5.40528 8.95202C5.45556 8.82913 5.52981 8.71747 5.6237 8.62358C5.7176 8.52969 5.82925 8.45544 5.95214 8.40515C6.07504 8.35487 6.20672 8.32957 6.3395 8.33073C6.47228 8.33188 6.6035 8.35947 6.7255 8.41188C6.84751 8.46428 6.95785 8.54047 7.0501 8.63598L12.0001 13.586L16.9501 8.63598C17.1387 8.45382 17.3913 8.35302 17.6535 8.3553C17.9157 8.35758 18.1665 8.46275 18.3519 8.64816C18.5373 8.83357 18.6425 9.08438 18.6448 9.34658C18.6471 9.60877 18.5463 9.86137 18.3641 10.05L12.7071 15.707Z"
              fill="#050505"
            />
          </g>
          <defs>
            <clipPath id="clip0_146_2033">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <ul
        className={`transition-opacity duration-500 transform ${
          dropdown ? "opacity-100 scale-y-100 p-3" : "opacity-0 scale-y-95"
        }`}
      >
        {dropdown ? (
          <>
            {subCategories.map((item, index) => (
              <li
                onClick={() => setActiveCategory(index)}
                className={`my-2 cursor-pointer text-[16px] font-medium ${
                  activeCategory === index ? "text-customGreen" : ""
                }`}
                key={index}
              >
                {item}
              </li>
            ))}
          </>
        ) : null}
      </ul>
    </>
  );
};

export default Dropdown;
