import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import style from "../static/styles/RootPage.module.scss";
import LiveChat from "../components/layout/livechat";

const RootPage = () => {
  return (
    <>
      <NavBar />
      <main className={style.container}>
        <Outlet />
      </main>
      <Footer />
      <LiveChat />
    </>
  );
};

export default RootPage;
