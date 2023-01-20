import React, { useState } from "react";

function Auth() {
  const [singUp, setSignUp] = useState(false);
  return (
    <div className={`w-full max-w-xs m-auto `}>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h5 className=" font-medium text-center text-lg">
          {singUp ? "Create Account" : "LOG IN"}
        </h5>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        {singUp && (
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
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
