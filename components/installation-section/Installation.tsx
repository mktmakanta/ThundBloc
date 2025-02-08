import React from "react";

const Installation = () => {
  return (
    <main className=" relative bg-[url('/images/landing/installation.jpg')] bg-cover bg-center h-screen flex items-center justify-center text-white">
      <div className="absolute h-full w-full bg-black opacity-50 "></div>
      <div className="absolute z-10 text-center space-y-7 flex flex-col items-center p-5">
        <div className="logo size-32 bg-white rounded-2xl"> </div>
        <h1 className="text-3xl lg:text-7xl font-semibold">
          Contribute your <br />
          knowledge
        </h1>
        <button className="text-black font-medium hover:bg-white/80 bg-white rounded-full px-5 py-2 lg:px-8 lg:py-3 text-base lg:text-xl font-ibm">
          Install Node
        </button>
      </div>
    </main>
  );
};

export default Installation;
