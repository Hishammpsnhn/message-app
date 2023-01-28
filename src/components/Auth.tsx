import React, { useState } from "react";
import add from "../assests/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

function Auth() {
  const InitialData = {
    userName: "",
    password: "",
    email: "",
  };
  type User = typeof InitialData;
  const [image, setImage] = useState<any>();
  const [data, setData] = useState<User>(InitialData);
  const [singUp, setSignUp] = useState<boolean>(true);
  const [ConfirmPassword, setConfirmPassword] = useState<String>();
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(false);
    if (singUp) {
      if (data.password === ConfirmPassword) {
        try {
          const res = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          const storageRef = ref(storage, `${data.userName}`);
          await uploadBytesResumable(storageRef, image).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              await updateProfile(res.user, {
                displayName: data.userName,
                photoURL: downloadURL,
              });
              const userRef = collection(db, "users");
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName: data.userName,
                email: data.email,
                imageURL: downloadURL,
              });
              await setDoc(doc(db, "userchats", res.user.uid), {});
            });
          });
        } catch (error) {
          setErrorMessage(true);
        }
      } else {
        console.log("password not match with confirm password");
      }
    }
  };
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let file = e.target.files[0];
      setImage(file);
    }
  };
  return (
    <div className={`w-full max-w-xs m-auto `}>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h5 className=" font-medium text-center text-lg">
          {singUp ? "Create Account" : "LOG IN"}
        </h5>
        {singUp && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setData({ ...data, userName: e.target.value })}
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className={`shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border ${
              errorMessage && "border-red-500"
            }  `}
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {errorMessage && (
            <p className="text-red-500 text-xs italic">Something went wrong</p>
          )}
        </div>
        {singUp && (
          <>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              onChange={handleChangeImage}
            />
            <label
              className=" flex text-gray-700 text-sm font-bold mb-2 "
              htmlFor="file"
            >
              <span>Add an avatar</span>
              <img className="w-5 h-5" src={add} alt="" />
            </label>
          </>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {singUp ? "Sign In" : "Log In"}
          </button>
          {!singUp && (
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          )}
        </div>
        {singUp ? (
          <p
            className="text-blue-600 text-xs italic hover:text-blue-800 cursor-pointer text-center mt-6"
            onClick={() => setSignUp((singup) => !singup)}
          >
            Already have account ? Login
          </p>
        ) : (
          <p
            className="text-blue-600 text-xs italic hover:text-blue-800 cursor-pointer text-center mt-6"
            onClick={() => setSignUp((singup) => !singup)}
          >
            Don't have account ? Sign Up{" "}
          </p>
        )}
      </form>
    </div>
  );
}

export default Auth;
