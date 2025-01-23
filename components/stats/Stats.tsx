import React from "react";

const Stats = () => {
  return (
    <main className="relative h-screen p-7 md:p-10 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/stats-video.mp4" type="video/mp4" />
        {/* <source src="/path-to-optimized-video.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>
      <div className="relative space-y-2 text-white md:flex justify-between  z-10  mx-auto">
        <h1 className="text-xl md:text-4xl">
          The ThundBloc <br /> Network
        </h1>
        <ul className="font-ibm">
          <li>+1,200 Active Validator Nodes</li>
          <li>99.9% Node Uptime</li>
        </ul>
      </div>
    </main>
  );
};

export default Stats;
