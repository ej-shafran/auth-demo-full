import { AuthProvider, PrivateRoute } from "@hilma/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <AuthProvider accessTokenCookie={process.env.VITE_ATCOOKIE}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<PrivateRoute componentName="User" component={<User />} redirectPath="/" />} />
            <Route path="/admin" element={<PrivateRoute componentName="Admin" component={<Admin />} redirectPath="/" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
