import React, { useContext } from "react";
import { TfiMore } from "react-icons/tfi";
import { BsCameraVideo } from "react-icons/bs";
import { IconContext } from "react-icons";
import { SelectChatContext } from "../../context/SelectedChatContext";

function ChatHeader() {
  const { selectedChat} = useContext(SelectChatContext);
  return (
    <div className="bg-sky-800 w-full justify-between flex items-center ">
      <p className="text-2xl font-medium text-white p-5 capitalize">{selectedChat.displayName}</p>
      <div className="flex flex-row px-5">
        <IconContext.Provider value={{ size: "30px",style:{marginLeft:"25px"} }}>
          <BsCameraVideo />
          <TfiMore />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ChatHeader;
