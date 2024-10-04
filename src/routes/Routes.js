import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../container/user/auth/login/Login";
import UserPrivateRoutes from "./UserPrivateRoutes";
import Layout from "../component/user/defaultLayout/Layout";
import Dashboard from "../container/user/pages/dashboard/Dashboard";
// import Socialkick from "../container/user/pages/Home";
import "../container/user/auth/auth.css";
import RegisterForm from "../container/user/auth/register/Register";
import Profile from "../container/user/pages/profile/Profile";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<RegisterForm />} />

          <Route element={<UserPrivateRoutes />}>
            <Route path="/user" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
