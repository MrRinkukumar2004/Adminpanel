import { Routes, Route } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/users/Home";
import Profile from "../pages/users/Profile";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
