import React, { FC, useContext } from "react";
import { SelectChatContext } from "../../context/SelectedChatContext";
import ChatHeader from "./ChatHeader";
import InputSection from "./InputSection";
import Messages from "./Messages";

const Chat: React.FC = () => {
  const { selectedChat} = useContext(SelectChatContext);
  if(!selectedChat) return <div>select a user for Chat</div>
  return (
    <div className=" relative hidden xs:block xs:w-[70%]">
      <ChatHeader />
      <Messages />
      <div className="p-3 absolute w-full bottom-0 bg-sky-900">
        <InputSection />
      </div>
    </div>
  );
};

export default Chat;
