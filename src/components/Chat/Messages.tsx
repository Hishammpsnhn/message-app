import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SelectChatContext } from "../../context/SelectedChatContext";
import { db } from "../../firebase";

function Messages() {
  const { selectedChat } = useContext(SelectChatContext);
  const { currentUser } = useContext(AuthContext);
  const [messages, setMessages] = useState<null | any>([]);
  const combinedId =
    currentUser.uid > selectedChat.uid
      ? currentUser.uid + selectedChat.uid
      : selectedChat.uid + currentUser.uid;
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", combinedId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [combinedId]);
  return (
    <div className="text-white font-thin flex flex-col">
      {messages.map((message: any,i:number) =>
        message.senderId === currentUser.uid ? (
          <div key={i} className="w-full px-2">
            <div className="bg-sky-900   float-right  px-2 py-1 rounded-xl my-1">
              {message.text}
            </div>
          </div>
        ) : (
          <div key={i} className="w-full px-2 ">
            <div className="bg-sky-900   float-left px-2 py-1 rounded-xl my-1">
            {message.text}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Messages;
