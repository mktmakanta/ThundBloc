"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

const Notification = () => {
  const [apper, setApper] = useState(true);

  const handleSection = () => {
    setApper(false);
  };
  return (
    <main
      className={`relative p-8 flex justify-center space-x-5 items-center text-xl bg-green-200 ${
        apper ? "block" : "hidden"
      }`}
    >
      <div>
        Introducing: ThundBloc Nodes (TBN) – Powering the ThundBloc Ecosystem
      </div>
      <button className="py-2 px-6 rounded-full bg-white font-semibold ">
        LEARN MORE
      </button>
      <div onClick={handleSection} className="absolute top-4 right-6">
        <X />
      </div>
    </main>
  );
};

export default Notification;
