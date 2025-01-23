import React from "react";
import NavBar from "../navbar/NavBar";
import Notification from "../notification-bar/Notification";

const Hero = () => {
  return (
    <main className="relative h-screen text-slate-950  overflow-hidden">
      <Notification />
      <NavBar />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/thundvideo.mp4" type="video/mp4" />
        {/* <source src="/path-to-optimized-video.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      <div className="relative text-center  z-10 p-6 mt-10  space-y-3  max-w-5xl mx-auto">
        <h1 className="font-nunito text-4xl md:text-6xl lg:text-7xl  font-bold ">
          Powering the Next Generation of Decentralized Innovation
        </h1>
        <p className="font-ibm max-w-2xl mx-auto">
          ThundBloc is a cutting-edge Web3 platform designed to revolutionize
          how users interact with decentralized technologies.
        </p>
        <button className="mt-3 px-12 py-3 rounded-full text-xl bg-slate-950 text-white hover:text-black hover:bg-white/50 hover:ring-2 ring-slate-950">
          Join
        </button>
      </div>
    </main>
  );
};

export default Hero;
