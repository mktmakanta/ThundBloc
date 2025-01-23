import React from "react";

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

  return (
    <section className="">
      <div className="h-[500px] grid grid-cols-4 text-white">
        {objectives.map((objective, index) => (
          <div key={index} className="relative p-6 h-full">
            <h1 className="z-20 relative">{objective.num}</h1>
            <h3 className="z-20 relative">{objective.heading}</h3>
            <img
              src={objective.image}
              alt={objective.heading}
              className="absolute  top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute z-10 top-0 left-0 w-full h-full object-cover bg-neutral-950"></div>
            <p className="z-20 relative ">{objective.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objective;
