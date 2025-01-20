"use client";

import React, { useEffect, useState } from "react";
import MenuList from "../menu-list/MenuList";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [menuOpen]);

  return (
    <nav
      className={`relative z-30  p-10 ${
        menuOpen ? "bg-slate-950 text-white fixed " : ""
      }`}
    >
      <div className="flex items-center justify-between ">
        {" "}
        <div className="brand">THUNDBLOC</div>
        <div className="flex items-center space-x-5 font-semibold">
          <h2 className="hidden md:flex">EXPLORE</h2>
          <button onClick={toggleMenu} className="">
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className=" h-screen w-full">
          <MenuList />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
