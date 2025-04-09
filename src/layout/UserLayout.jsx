import { Outlet } from "react-router-dom";
import UserHeader from "../components/UserHeader";

const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <Outlet />
      <footer>User Footer</footer>
    </div>
  );
};

export default UserLayout;
