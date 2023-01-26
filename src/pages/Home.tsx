import React from "react";
import Chat from "../components/Chat/Chat";
import SideBar from "../components/Sidebar/SideBar";

function Home() {
  return (
    <div className="w-full xs:flex ">
      <SideBar />
      <Chat />
    </div>
  );
}

export default Home;
