import React, { FC } from "react";
import Chat from "../components/Chat/Chat";
import SideBar from "../components/Sidebar/SideBar";

const Home: React.FC = () => {
  return (
    <div className="w-full xs:flex ">
      <SideBar />
      <Chat />
    </div>
  );
};

export default Home;
