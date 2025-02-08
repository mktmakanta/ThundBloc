"use client";

import { useState } from "react";

const menuItems = [
  { category: "Products", submenu: [] },
  {
    category: "Developers",
    submenu: ["Docs", "Use Cases", "Ecosystem", "Get Involved"],
  },
  { category: "Community", submenu: [] },
];

const SidebarMenu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="flex w-full h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-1/3 flex flex-col">
        {menuItems.map((item) => (
          <div
            key={item.category}
            className={`p-6 text-2xl font-bold cursor-pointer transition-all ${
              activeCategory === item.category
                ? "bg-neutral-100 text-black"
                : "bg-black"
            }`}
            onMouseEnter={() => setActiveCategory(item.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {item.category}
          </div>
        ))}
      </div>

      {/* Right Submenu (Only show if hovered category has submenu items) */}
      <div className="w-2/3 bg-neutral-100 p-8">
        {menuItems
          .find((item) => item.category === activeCategory)
          ?.submenu.map((subItem, index) => (
            <div key={index} className="text-xl text-gray-500 py-2">
              {subItem}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SidebarMenu;
