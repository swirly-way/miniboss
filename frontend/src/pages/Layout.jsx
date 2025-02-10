import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavbar";

export default function Layout() {
  return (
    <>
      <MainNavBar />

      <Outlet />
    </>
  );
}
