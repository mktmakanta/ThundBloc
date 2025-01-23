import React from "react";

const BackedBy = () => {
  const sponsors = [
    { name: "Binance", image: "/icons/backedby/Binance.png" },
    { name: "Binance", image: "/icons/backedby/Grayscale.png" },
    { name: "Binance", image: "/icons/backedby/Caladan.png" },
    { name: "Binance", image: "/icons/backedby/bybit.png" },
    { name: "Binance", image: "/icons/backedby/kracke.png" },
    { name: "Binance", image: "/icons/backedby/Crypto.png" },
    { name: "Binance", image: "/icons/backedby/bitfinex.png" },
    { name: "Binance", image: "/icons/backedby/Presto.png" },
    { name: "Binance", image: "/icons/backedby/republic.png" },
    { name: "Binance", image: "/icons/backedby/Plutus.png" },
  ];

  return (
    <section className="bg-black py-12">
      <h2 className="text-center text-gray-400 text-2xl md:text-4xl mb-6">
        Backed by the best
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6  p-6">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="max-h-28 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BackedBy;
