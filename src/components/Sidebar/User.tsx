import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { user } from "../../model/model";
type Props = {
  user:user
}
function User({user}:Props) {
  
  return (
      <div className="flex text-white p-1 items-center  hover:bg-slate-800 ">
        <img
          src={user.imageURL}
          className="rounded-full w-10 shadow-lg mx-4 my-2"
          alt="Avatar"
        />
        <div>
          <p className="font-medium text-base capitalize">{user.displayName}</p>
          <p>hai</p>
        </div>
      </div>
  );
}

export default User;
