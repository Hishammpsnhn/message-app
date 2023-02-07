import { signOut } from "firebase/auth";
import React, { FC, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { auth, db } from "../../firebase";
import Users from "./Users";
const SideBar:React.FC=()=> {
  const {currentUser} = useContext(AuthContext);
  

  return (
    <div className="]  bg-sky-800  h-[100vh]">
      <div className="bg-sky-900 flex xs:flex-col  text-white font-mono p-3 md:flex-row items-center justify-between">
        <h2 className=" font-semibold font-sans text-3xl">Chat App</h2>
        <div className="flex justify-end xs:justify-between  items-center">
          <img
            src={currentUser.photoURL}
            className="rounded-full w-10 shadow-lg"
            alt="Avatar"
          />
          <p className="capitalize px-2">{currentUser.displayName}</p>
          <button
            type="button"
            className="inline-block px-1 py-1 bg-gray-800 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            onClick={()=> signOut(auth)}
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
