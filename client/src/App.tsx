import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminOnly from "./pages/AdminOnly";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserOnly from "./pages/UserOnly";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*TODO: make this route only accessible to Admins  */}
        <Route path="/admin" element={<AdminOnly />} />
        {/*TODO: make this route only accessible to Users  */}
        <Route path="/user" element={<UserOnly />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
