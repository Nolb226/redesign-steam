import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
