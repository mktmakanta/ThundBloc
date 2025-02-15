import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/providers/store";
import { closeMenu } from "@/providers/menuSlice";

const menuItems = [
  {
    category: "Products",
    submenu: [
      "Gaia Domain",
      "AI Agent Domains",
      "LLM Library",
      "Gaia XP",
      "Network Map",
      "Chat",
    ],
  },
  {
    category: "Developers",
    submenu: ["Docs", "Use Cases", "Ecosystem", "Install Node"],
  },
  { category: "Community", submenu: ["Blogs", "Events", "FAQs"] },
];

export default function MobileNav() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.menu);

  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="md:hidden relative">
      {isOpen && (
        <div className="fixed inset-0 bg-neutral-950 text-white w-full h-full z-40  overflow-y-auto">
          <div className=" sticky top-0 z-50 bg-neutral-950 flex justify-between items-center px-4 py-6  border-b border-neutral-600">
            <h2 className=" font-bold">THUNDBLOC</h2>
            <button
              onClick={() => dispatch(closeMenu())}
              className="font-ibm text-sm font-semibold"
            >
              CLOSE
            </button>
          </div>
          <nav>
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  className={`w-full flex justify-between items-center py-6 px-4 text-left text-3xl font-semibold ${
                    openCategory === item.category ? "bg-white text-black" : ""
                  }`}
                  onClick={() => toggleCategory(item.category)}
                >
                  <div className="text-5xl"> {item.category}</div>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openCategory === item.category ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openCategory === item.category && (
                  <ul className=" space-y-4 text-3xl py-5 pl-3 bg-white ">
                    {item.submenu.map((submenuItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="pl-4 font-semibold text-black"
                      >
                        {submenuItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
          <ul className=" space-y-4 px-4 py-8 text-sm font-semibold font-ibm cursor-pointer ">
            <li>X</li>
            <li>Discord</li>
            <li>Telegram</li>
            <li>GitHub</li>
            <li>Reddit</li>
          </ul>
          <div className="px-4 pb-6 pt-10 flex justify-between items-center ">
            <p className="font-ibm text-sm">©2025 ThundBloc</p>
            <div className="size-10 rounded-lg bg-white"></div>
          </div>
        </div>
      )}
    </div>
  );
}
