import React from "react";
import NavBar from "../navbar/NavBar";
import Notification from "../notification-bar/Notification";

const Hero = () => {
  return (
    <main className="relative h-screen  overflow-hidden">
      <Notification />
      <NavBar />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/thundvideo.mp4" type="video/mp4" />
        {/* <source src="/path-to-optimized-video.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      <div className="relative text-center text-white z-10 p-4">
        <h1>Powering the Next Generation of Decentralized Innovation</h1>
        <h2>
          ThundBloc is a cutting-edge Web3 platform designed to revolutionize
          how users interact with decentralized technologies.
        </h2>
        <button>Join</button>
      </div>
    </main>
  );
};

export default Hero;
