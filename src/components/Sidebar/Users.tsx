import { collection, doc, getDoc, onSnapshot, query, setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SelectChatContext } from "../../context/SelectedChatContext";
import { db } from "../../firebase";
import { user } from "../../model/model";
import User from "./User";

function Users() {
  const { currentUser } = useContext(AuthContext);
  const { setSelectedChat } = useContext(SelectChatContext);
  const [users, Setusers] = useState<any>(null);

  useEffect(() => {
    const usersRef = collection(db, "users");
    const q = query(usersRef);
    onSnapshot(q, (snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      console.log(products);
      Setusers(products);
    });
  }, []);
  const handleSelectChat = async(user: user) => {
    // message 
    const combinedId =
    currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid;
   
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if(!res.exists()){
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
      }
      setSelectedChat(user)
    } catch (error) {
      
    }

  };
  return (
    <div>
      <p className="text-gray-900 mx-4">Find a user</p>
      {users?.map((user: user) => {
        if (user.uid !== currentUser.uid) {
          return (
            <div onClick={() => handleSelectChat(user)}>
              <User user={user} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Users;
