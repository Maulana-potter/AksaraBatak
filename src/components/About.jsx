import React from "react";

const About = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-card text-foreground bg-primary/7 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                Aksara Batak:{" "}
                <span className="block text-primary">
                  Warisan Budaya yang Hidup
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-foreground">
              <p className="text-lg sm:text-xl leading-relaxed">
                Aksara Batak adalah sistem tulisan asli yang digunakan oleh
                masyarakat Batak di Sumatera Utara. Lebih dari sekadar huruf,
                aksara ini merupakan cerminan sejarah, identitas budaya, dan
                nilai-nilai spiritual.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                Memahami aksara Batak berarti melestarikan tradisi dan
                memperkuat rasa kebangsaan serta penghargaan terhadap akar
                budaya.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/pengenalan"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
                aria-label="Mulai mempelajari Aksara Batak sekarang"
              >
                Mulai Pelajari Sekarang
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-background  ">
              <img
                src="./image.png"
                alt="Seni Aksara Batak dengan detail warna oranye dan krem yang hangat menampilkan keindahan sistem tulisan tradisional"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
