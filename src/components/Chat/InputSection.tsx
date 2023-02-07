import React, { useContext, useRef, useState } from "react";
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
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";

function InputSection() {
  const { currentUser } = useContext(AuthContext);
  const { selectedChat } = useContext(SelectChatContext);
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [showImage, setShowImage] = useState<any>();

  const inputRef = useRef<any>(null);

  const handleClick = () => {
    inputRef.current.click();
  };
  const handleSend = async () => {
    const combinedId =
      currentUser.uid > selectedChat.uid
        ? currentUser.uid + selectedChat.uid
        : selectedChat.uid + currentUser.uid;
    if (image) {
      const storageRef = ref(storage, uuid());
      await uploadBytesResumable(storageRef, image).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", combinedId), {
            messages: arrayUnion({
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          });
        });
      });
    } else {
      if (text.length >= 1) {
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
            setText("");
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    setImage(null);
    setText("");
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let file = e.target.files[0];
      setImage(file);
      setShowImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className="flex justify-between">
      <div className="cursor-pointer">
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={inputRef}
        />
        {!showImage ? (
          <IconContext.Provider value={{ size: "30px" }}>
            <GrAttachment onClick={handleClick} />
          </IconContext.Provider>
        ) : (
          <img onClick={handleClick} className="w-[30px] h-[30px]" src={showImage} alt="" />
        )}
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
