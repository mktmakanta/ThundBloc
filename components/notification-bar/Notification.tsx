"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

const Notification = () => {
  const [appear, setAppear] = useState(true);

  const handleSection = () => {
    setAppear(false);
  };
  return (
    <main
      className={`z-20 relative px-2 py-4 flex items-center justify-center min-h-24 text-white bg-[url('/images/landing/notification.jpg')] bg-cover bg-top ${
        appear ? "block" : "hidden"
      }`}
    >
      <div className="absolute h-full w-full bg-black opacity-30"></div>
      <div className="z-30 max-w-7xl mx-auto flex flex-col lg:text-xl font-semibold lg:flex-row lg:items-center gap-2">
        {" "}
        <div>
          Introducing: ThundBloc Nodes (TBN) – Powering the ThundBloc Ecosystem
        </div>
        <div>
          {" "}
          <button className="py-2 px-4 text-sm lg:text-base text-black rounded-full bg-white font-semibold ">
            LEARN MORE
          </button>
        </div>
      </div>
      <div onClick={handleSection} className="z-20 absolute top-2 right-4">
        <X />
      </div>
    </main>
  );
};

export default Notification;
