import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { user } from "../model/model";
interface Props {
  children: React.ReactNode;
}

export const SelectChatContext = React.createContext<any>(null);

export const SelectChatContextProvider: React.FC<Props> = ({ children }) => {
  const [selectedChat, setSelectedChat] = React.useState<null | user>(null);

  return (
    <SelectChatContext.Provider value={{ selectedChat,setSelectedChat }}>
      {children}
    </SelectChatContext.Provider>
  );
};
