import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-t from-gray-900 via-gray-850 to-gray-950">
        <Navbar />
        <div className="container flex flex-grow justify-center items-center">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
