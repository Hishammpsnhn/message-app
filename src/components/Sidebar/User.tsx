import React from "react";

function User() {
  return (
      <div className="flex text-white p-1 items-center  hover:bg-slate-800 ">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          className="rounded-full w-10 shadow-lg mx-4 my-2"
          alt="Avatar"
        />
        <div>
          <p className="font-medium text-base capitalize">Shahil</p>
          <p>hai</p>
        </div>
      </div>
  );
}

export default User;
