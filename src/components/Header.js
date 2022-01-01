import React, { useState } from "react";

const Header = () => {
  const [ishamopen, Sethamopen] = useState(false);
  const hamopener = () => {
    if (ishamopen) {
      Sethamopen(false);
    } else {
      Sethamopen(true);
    }
  };
  return (
    <header className="w-full top-0 left-0 p-6 shadow-md">
      <div className="flex justify-between items-center">
        <div className="ml-4 lg:ml-32 text-lg md:text-2xl font-bold">
          <h1 className="cursor-pointer">Your Challenge</h1>
        </div>
        <div className="hidden md:block mr-4 lg:mr-20">
          <ul className="flex">
            <li className="mx-4 cursor-pointer font-semibold border-b-2 border-red-500">
              Product
            </li>
            <li className="mx-4 cursor-pointer font-semibold">Download</li>
            <li className="mx-4 cursor-pointer font-semibold">Pricing</li>
          </ul>
        </div>
        <div className="block md:hidden">
          <span
            className="font-extrabold  rounded font-sans text-sm text-gray-600 py-1 px-2 hover:bg-gray-100 cursor-pointer"
            onClick={hamopener}
          >
            {ishamopen ? <span className="text-xs">✖️</span> : <span>☰</span>}
          </span>
        </div>
        {ishamopen && (
          <ul className="flex flex-col list-none w-64 mx-0 md:hidden absolute top-16 right-0 border px-1 py-1  z-30 bg-white rounded shadow-lg">
            <li>
              <span className="block  px-2 sm:px-7 py-2 text-xs sm:text-sm rounded font-medium hover:bg-gray-100">
                Product
              </span>
            </li>
            <li>
              <span className="block  px-2 sm:px-7 py-2 text-xs sm:text-sm rounded font-medium hover:bg-gray-100">
                Download
              </span>
            </li>
            <li>
              <span className="block  px-2 sm:px-7 py-2 text-xs sm:text-sm rounded font-medium hover:bg-gray-100">
                Pricing
              </span>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
