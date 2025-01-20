import React from "react";

const NavBar = () => {
  return (
    <header className="bg-yellow-100 flex p-6 items-center text-lg">
      <div className="logo"></div>
      <nav className="flex space-x-6 items-center">
        <ul className="flex space-x-5">
          <li>
            <a href="#">Node Explorer</a>
          </li>
          <li>
            <a href="#">Thundbloc XP</a>
          </li>
          <li>
            <a href="#">Network-Map</a>
          </li>
          <li>
            <a href="#">Roadmap</a>
          </li>
          <li>
            <a href="#">Chat</a>
          </li>
          <li>
            <a href="#">Install Node</a>
          </li>
        </ul>
        <button className="py-2 px-6 rounded-full bg-white">Connect</button>
      </nav>
    </header>
  );
};

export default NavBar;
