import React from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

function StoreLayout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default StoreLayout;
