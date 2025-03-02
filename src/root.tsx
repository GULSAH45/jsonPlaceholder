import { Outlet } from "react-router-dom";
import NavbarComp from "./components/navbarComp";

function Root() {
  return (
    <>
      <NavbarComp />
      <Outlet />
    </>
  );
}

export default Root;
