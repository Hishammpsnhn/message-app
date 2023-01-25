import React from "react";
import profile from "../assests/OIP.jpg";
import User from "./User";
import Users from "./Users";
function SideBar() {
  return (
    <div className="col-span-1 bg-sky-800  h-[100vh]">
      <div className="bg-sky-900 text-white font-mono p-3 flex flex-row items-center justify-between">
        <h2 className=" font-medium text-xl">Chat App</h2>
        <div className="flex  justify-between flex-row items-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className="rounded-full w-10 shadow-lg"
            alt="Avatar"
          />
          <p className="capitalize px-2">hisham</p>
          <button
            type="button"
            className="inline-block px-1 py-1 bg-gray-800 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            logOut
          </button>
        </div>
      </div>
      <Users/>
    </div>
  );
}

export default SideBar;
