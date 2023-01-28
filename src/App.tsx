import React from "react";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<AuthPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
