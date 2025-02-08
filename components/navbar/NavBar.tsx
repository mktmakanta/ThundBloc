"use client";

import React, { useEffect, useState } from "react";
import MenuList from "../menu-list/MenuList";
import Image from "next/image";

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
    <nav className={`relative z-10 p-12 space-y-5 `}>
      <div className=" flex items-center justify-between ">
        {" "}
        <div className="brand">
          <Image
            src={"/icons/logotext-black_1.png"}
            width={130}
            height={100}
            alt="logo"
            quality={100}
            className=" "
          />
        </div>
        <div className="flex items-center space-x-5 font-semibold">
          <h2 className="hidden md:flex">EXPLORE</h2>
          <button onClick={toggleMenu} className="">
            MENU
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
