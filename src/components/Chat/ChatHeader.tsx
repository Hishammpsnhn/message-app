import React, { useContext } from "react";
import { TfiMore } from "react-icons/tfi";
import { BsCameraVideo } from "react-icons/bs";
import { IconContext } from "react-icons";
import { SelectChatContext } from "../../context/SelectedChatContext";
import { BiArrowBack } from "react-icons/bi";

function ChatHeader() {
  const { selectedChat, setSelectedChat } = useContext(SelectChatContext);
  return (
    <div className="bg-sky-800 w-full justify-between flex items-center ">
      <div className="xs:hidden" onClick={() => setSelectedChat(null)}>
        <IconContext.Provider
          value={{ size: "25px", style: { marginLeft: "25px" } }}
        >
          <BiArrowBack />
        </IconContext.Provider>
      </div>
      <p className="text-2xl font-medium text-white p-5 capitalize">
        {selectedChat.displayName}
      </p>
      <div className="flex flex-row px-5">
        <IconContext.Provider
          value={{ size: "25px", style: { marginLeft: "25px" } }}
        >
          <BsCameraVideo />
          <TfiMore />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ChatHeader;
