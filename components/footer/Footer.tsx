import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f6] py-8 lg:py-20 px-4 lg:px-10 font-ibm">
      <div className="grid gap-10 grid-cols-1  lg:grid-cols-2">
        {/* Subscription Section */}
        <div className="lg:w-4/5 ">
          <h1 className="font-medium text-sm text-black mb-4 ">
            Sign up for updates from the ThundBloc team
          </h1>
          <div className="flex items-center gap-2 border-b  focus:border-black border-gray-400 ">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-2 focus:outline-none bg-none"
            />
            <button className="font-medium text-black  ">SUBMIT</button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:px-10  md:gap-16 lg:gap-20 divide-y-2 lg:divide-none font-medium ">
          <ul className="space-y-3 px-4 py-6">
            <h1 className="font-bold text-black mb-4">PRODUCTS</h1>
            <li>Node</li>
            <li>Network Map</li>
            <li>Explorer</li>
            <li>Wallet</li>
            <li>Chat</li>
          </ul>
          <ul className="space-y-3 px-4 py-6">
            <h1 className="font-semibold text-black mb-4">DEVELOPERS</h1>
            <li>Docs</li>
            <li>Use Cases</li>
            <li>Ecosystem</li>
            <li>Install Node</li>
          </ul>
          <ul className="space-y-3 px-4 py-6">
            <h1 className="font-semibold text-black mb-4">COMMUNITY</h1>
            <li>Blog</li>
            <li>Events</li>
            <li>FAQs</li>
          </ul>
          <ul className="space-y-3 px-4 py-6">
            <h1 className="font-semibold text-black mb-4">SOCIAL</h1>
            <li>X</li>
            <li>Discord</li>
            <li>Telegram</li>
            <li>GitHub</li>
            <li>Reddit</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-20  flex justify-between items-center text-black font-bold text-sm">
        <div>©2025 ThundBloc</div>
        <div className="w-10 h-10 rounded-full bg-black"></div>
      </div>
    </footer>
  );
};

export default Footer;
