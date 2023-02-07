import React, { FC, useContext } from "react";
import { SelectChatContext } from "../../context/SelectedChatContext";
import ChatHeader from "./ChatHeader";
import InputSection from "./InputSection";
import Messages from "./Messages";

const Chat: React.FC = () => {
  const { selectedChat} = useContext(SelectChatContext);
  if(!selectedChat) return <div className="xs:block hidden">select a user for Chat</div>
  return (
    <div className=" relative h-[100vh]">
      <ChatHeader />
      <Messages />
      <div className="p-3 absolute w-full bottom-0 bg-sky-900">
        <InputSection />
      </div>
    </div>
  );
};

export default Chat;
