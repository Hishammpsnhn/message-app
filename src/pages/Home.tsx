import React, { FC, useContext } from "react";
import Chat from "../components/Chat/Chat";
import SideBar from "../components/Sidebar/SideBar";
import { SelectChatContext } from "../context/SelectedChatContext";

const Home: React.FC = () => {
  const { selectedChat } = useContext(SelectChatContext);
  console.log(selectedChat);
  return (
    <div className="w-full xs:flex">
      <div className={`xs:w-[30%] w-[100%] xs:${selectedChat && 'block'} ${selectedChat && 'hidden'} `} >
        <SideBar />
      </div>
      <div className={`xs:w-[70%]  xs:block   `} >
        <Chat />
      </div>
    </div>
  );
};

export default Home;
