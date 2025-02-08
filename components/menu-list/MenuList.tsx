"use client";

import { useState } from "react";

const menuItems = [
  {
    category: "Products",
    submenu: ["Node", "Network Map ", "Explorer", "Walllet", "Chat"],
  },
  {
    category: "Developers",
    submenu: ["Docs", "Use Cases", "Ecosystem", "Install Node"],
  },
  { category: "Community", submenu: ["Blogs", "Events", "FAQs"] },
];

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  return (
    <div className="bg-neutral-950 absolute h-screen w-full z-50 grid grid-rows-[100px,1fr,80px]">
      <div className="bg-neutral-950 border-b border-neutral-600 text-white flex justify-end items-center space-x-5 font-semibold font-ibm px-10">
        <h2 className="">EXPLORE</h2>
        <button className="">CLOSE</button>
      </div>
      {/* Left Sidebar */}
      <div className="grid grid-cols-2">
        <div className="grid grid-rows-3 ">
          {menuItems.map((item) => (
            <div
              key={item.category}
              className={`p-14 text-7xl flex items-center border-y border-neutral-600 font-medium cursor-pointer transition-all ${
                activeCategory === item.category
                  ? "bg-neutral-100 border-r border-black text-black"
                  : "bg-neutral-950 text-white"
              }`}
              onMouseEnter={() => setActiveCategory(item.category)}
              // onMouseLeave={() => setActiveCategory(null)}
            >
              {item.category}
            </div>
          ))}
        </div>

        {/* Right Submenu (Only show if hovered category has submenu items) */}
        <div className=" bg-neutral-100 py-10 px-14 space-y-8">
          {menuItems
            .find((item) => item.category === activeCategory)
            ?.submenu.map((subItem, index) => (
              <div
                key={index}
                className="text-5xl font-medium text-gray-500 py-2 hover:text-black cursor-pointer "
              >
                {subItem}
              </div>
            ))}
        </div>
      </div>
      <div className="bg-neutral-950 text-white border-t space-x-96 font-ibm text-sm font-semibold flex px-14 items-center border-neutral-600">
        <div className=""> ©2025 ThundBloc</div>
        <ul className="space-x-8 flex cursor-pointer ">
          <li>X</li>
          <li>Discord</li>
          <li>Telegram</li>
          <li>GitHub</li>
          <li>Reddit</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
