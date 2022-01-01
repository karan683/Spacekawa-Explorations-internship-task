import React, { useState } from "react";

const UserCard = ({ userData, userDetailChangeHandler }) => {
  // const [bgColor, setBgColor] = useState("");
  const clickHandler = () => {
    userDetailChangeHandler(userData);
    // setBgColor("bg-purple-500");
  };
  return (
    <div
      className={`w-72 h-28 rounded-lg py-3 px-4 shadow-md border flex flex-col my-3 mx-2 cursor-pointer hover:bg-purple-400 hover:text-white group`}
      onClick={clickHandler}
    >
      <h6 className="mb-2 text-gray-600 text-sm group-hover:text-white">
        {userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)} .{" "}
        {userData.nat}
      </h6>
      <h2 className="mb-2 text-xl font-semibold">
        {userData.name.title} {userData.name.first} {userData.name.second}{" "}
      </h2>
      <h4 className="mb-1 text-red-500 group-hover:text-white">
        {userData.email}
      </h4>
    </div>
  );
};

export default UserCard;
