import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
interface Props {
  children: React.ReactNode;
}

export const AuthContext = React.createContext<any>(null);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<null | {}>();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log(user,"eialo")
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
