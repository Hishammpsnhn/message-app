import React, { FC } from "react";
import ChatHeader from "./ChatHeader";
import InputSection from "./InputSection";
import Messages from "./Messages";

const Chat: React.FC = () => {
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
