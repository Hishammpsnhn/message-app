import React from "react";
import { BiSend } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { GrAttachment } from "react-icons/gr";
function InputSection() {
  return (
    <div className="flex justify-between">
      <div className="cursor-pointer">
        <IconContext.Provider value={{ size: "30px" }}>
          <GrAttachment />
        </IconContext.Provider>
      </div>

      <input
        type="text"
        className="
          form-control
          block
          w-full
          px-3
          py-1.5
          mx-1.5
          text-base
          font-normal
          text-gray-900
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput3"
        placeholder="Type a message"
      />
      <div className="cursor-pointer">
        <IconContext.Provider value={{ size: "40px" }}>
          <BiSend />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default InputSection;
