"use client";

import React, { useState, useRef } from "react";

const Objective = () => {
  const objectives = [
    {
      num: "01",
      heading: "Empower Decentralized Innovation",
      description:
        "Facilitate seamless integration with blockchain technology, enabling users to harness the full potential of decentralized finance, NFTs, and smart contract interactions.",
      image: "/images/objectives/objective1.jpg",
    },
    {
      num: "02",
      heading: "Enhance User Accessibility",
      description:
        "Provide intuitive, user-friendly interfaces and tools that bridge the gap between traditional users and Web3 technologies, making blockchain accessible to everyone.",
      image: "/images/objectives/objective2.jpg",
    },
    {
      num: "03",
      heading: "Promote Financial Sovereignty",
      description:
        "Offer solutions that prioritize user control over assets and data, fostering transparency, privacy, and autonomy in the decentralized ecosystem.",
      image: "/images/objectives/objective3.jpg",
    },
    {
      num: "04",
      heading: "Empower Decentralized Innovation",
      description:
        "Facilitate seamless integration with blockchain technology, enabling users to harness the full potential of decentralized finance, NFTs, and smart contract interactions.",
      image: "/images/objectives/objective4.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Handle Scroll Event
  const handleScroll = () => {
    const scrollLeft = containerRef.current.scrollLeft;
    const containerWidth = containerRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / containerWidth);
    setActiveIndex(newIndex);
  };

  return (
    <section className="">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-[500px] flex  overflow-x-scroll lg:overflow-auto snap-x snap-mandatory scroll-smooth scrollbar-hide text-white"
      >
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="group flex-shrink-0 w-full sm:w-[100%] lg:w-[25%] relative p-10 h-full snap-center"
          >
            {/* Number */}
            <h1 className="z-20 absolute right-7 top-5 font-bold">
              {objective.num}
            </h1>

            {/* Background Image */}
            <img
              src={objective.image}
              alt={objective.heading}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-neutral-950 group-hover:opacity-50"></div>

            {/* Content Wrapper */}
            <div className="absolute bottom-10 left-6 right-6 flex flex-col items-start space-y-5 z-20">
              <h3 className="text-5xl  font-medium">{objective.heading}</h3>
              <p className="hidden group-hover:block font-ibm text-sm font-medium">
                {objective.description}
              </p>
            </div>
            <div className="flex justify-center my-3 absolute mx-auto bottom-3 z-30 space-x-2 lg:hidden">
              {objectives.map((_, index) => (
                <div
                  key={index}
                  className={`size-2 rounded-full ${
                    activeIndex === index
                      ? "bg-gray-200  opacity-80 ring-1 ring-white/40"
                      : "ring-1 ring-white/40"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objective;
