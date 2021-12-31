import React from "react";

const UserCard = ({ userData, userDetailChangeHandler }) => {
  const clickHander = () => {
    userDetailChangeHandler(userData);
  };
  return (
    <div
      className={`w-72 h-28 rounded-lg py-3 px-4 shadow-md border flex flex-col my-3 mx-2 cursor-pointer hover:bg-purple-400 hover:text-white`}
      onClick={clickHander}
    >
      <h6 className="mb-2">
        {userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)} .{" "}
        {userData.nat}
      </h6>
      <h2 className="mb-2 text-xl font-semibold">
        {userData.name.title} {userData.name.first} {userData.name.second}{" "}
      </h2>
      <h4 className="mb-1">{userData.email}</h4>
    </div>
  );
};

export default UserCard;