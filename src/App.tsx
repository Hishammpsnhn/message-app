import React, { useContext } from "react";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const App: React.FC = () => {
  const {currentUser}  = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={currentUser ? <Home/>:<Navigate to='/login'/>} />
        <Route path="/login" element={currentUser ? <Navigate to='/'/> : <AuthPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
