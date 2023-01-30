import React, { useContext, useState } from "react";
import { BiSend } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { GrAttachment } from "react-icons/gr";
import { AuthContext } from "../../context/AuthContext";
import { SelectChatContext } from "../../context/SelectedChatContext";
import {
  arrayUnion,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
function InputSection() {
  const { currentUser } = useContext(AuthContext);
  const { selectedChat } = useContext(SelectChatContext);
  const [text, setText] = useState<string>("");
  const handleSend = async () => {
    const combinedId =
      currentUser.uid > selectedChat.uid
        ? currentUser.uid + selectedChat.uid
        : selectedChat.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (res.exists()) {
        await updateDoc(doc(db, "chats", combinedId), {
          messages: arrayUnion({
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }
    } catch (error) {}
  };
  return (
    <div className="flex justify-between">
      <div className="cursor-pointer">
        <IconContext.Provider value={{ size: "30px" }}>
          <GrAttachment />
        </IconContext.Provider>
      </div>

      <input
        type="text"
        className="
          form-control
          block
          w-full
          px-3
          py-1.5
          mx-1.5
          text-base
          font-normal
          text-gray-900
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        onChange={(e) => setText(e.target.value)}
        value={text}
        id="exampleFormControlInput3"
        placeholder="Type a message"
      />
      <div className="cursor-pointer">
        <IconContext.Provider value={{ size: "40px" }}>
          <BiSend onClick={handleSend} />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default InputSection;
