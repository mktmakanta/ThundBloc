"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/providers/store";
import { openMenu } from "@/providers/menuSlice";

const NavBar = () => {
  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(openMenu())} className="">
            MENU
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
