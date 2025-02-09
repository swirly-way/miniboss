import { Outlet } from "react-router-dom";
import VariantButtonLayout from "./MainNavbar";

const Layout = () => {
  return (
    <>
      <VariantButtonLayout />

      <Outlet />
    </>
  );
};

export default Layout;
