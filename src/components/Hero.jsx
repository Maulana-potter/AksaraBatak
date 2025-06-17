import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center px-6 md:px-20 bg-background overflow-hidden p-9">
      {/* Background circles */}
      <div className="absolute top-16 left-12 w-40 h-40 rounded-full bg-primary opacity-30 animate-pulse blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-16 w-36 h-36 rounded-full bg-secondary opacity-20 animate-pulse blur-3xl pointer-events-none"></div>

      {/* Background image with gradient overlay */}
      <img
        src="./image.png"
        alt="Traditional Batak pattern background"
        className="absolute inset-0 w-full h-full object-cover opacity-6 pointer-events-none"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/50 to-background/80 pointer-events-none"></div>

      {/* Left content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-10 lg:mt-0 text-center lg:text-left z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight max-w-xl drop-shadow-md">
          <span className="text-primary text-glow">Pelajari</span> Aksara Batak
          <br />
          <span className="text-secondary font-extrabold">Lebih Mendalam.</span>
        </h1>
        <p className="mt-6 text-secondary-foreground max-w-md text-lg md:text-xl leading-relaxed drop-shadow-sm">
          Jelajahi keindahan tulisan Batak tradisional dan pahami sejarah serta
          makna budayanya yang kaya nilai budaya luhur.
        </p>
        <div className="mt-8 flex gap-6 flex-wrap justify-center lg:justify-start">
          <a
            href="/pengenalan"
            className="cosmic-button inline-flex items-center gap-3 px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
            role="button"
          >
            Mulai Sekarang
          </a>
          <a
            href="/teks"
            className="inline-flex items-center gap-3 px-10 py-4 text-lg rounded-full border-2 border-secondary text-secondary-foreground bg-transparent hover:bg-secondary hover:text-secondary-foreground transition transform hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-secondary focus:ring-opacity-50"
            role="button"
          >
            Lihat Teks
          </a>
        </div>
      </div>

      {/* Right content with more top margin */}
      <div className="w-full lg:w-1/2 flex justify-end relative z-10 mt-20 lg:mt-0">
        <div className="relative  bg-card p-2 bg-primary/20 shadow-xl w-full max-w-none md:h-[630px] rounded-md lg:rounded-tl-[200px] lg:rounded-bl-[200px] rounded-tr-xl rounded-br-xl overflow-hidden">
          <div className="absolute "></div>
          <img
            src="./BGbatak.jpeg"
            alt="Aksara Batak"
            className="relative w-full h-full object-cover object-center rounded-md lg:rounded-tl-[200px] lg:rounded-bl-[200px]"
            loading="lazy"
          />
        </div>
        {/* decorative floating shapes */}
        <div className="absolute -top-10 -right-14 w-24 h-24 bg-primary rounded-2xl opacity-90 shadow-lg "></div>
        <div className="absolute -bottom-12 -left-10 w-16 h-16 bg-secondary rounded-full opacity-70 shadow-md "></div>
      </div>
    </section>
  );
};

export default Hero;
