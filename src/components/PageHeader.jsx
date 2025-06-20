import React from "react";
import { ArrowRight } from "lucide-react";

const PageHeader = ({ judul, deskripsi, halamanSaatIni }) => {
  // Default background image path
  const defaultBgImage = "/image.png";

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-primary/5 overflow-hidden">
        <img
          src={defaultBgImage}
          alt="Aksara Batak Background"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/0"></div>
      </div>

      {/* Content - Semua text di tengah */}
      <div className="container relative z-10 px-6 md:px-16 text-center">
        {" "}
        {/* Tambahkan text-center disini */}
        {/* Breadcrumb */}
        {halamanSaatIni && (
          <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
            {" "}
            {/* Tambahkan justify-center */}
            <span>Beranda</span>
            <ArrowRight className="w-4 h-4 mx-2" />
            <span className="text-primary font-medium">{halamanSaatIni}</span>
          </div>
        )}
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 mx-auto">
          {" "}
          {/* Tambahkan mx-auto */}
          {judul}
        </h1>
        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          {" "}
          {/* Tambahkan mx-auto */}
          {deskripsi}
        </p>
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          {" "}
          {/* Tambahkan justify-center */}
          <a
            href="/sejarah"
            className="px-6 py-3 bg-primary text-white rounded-xl card-hover"
          >
            Lihat Sejarah
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 text-6xl text-primary/10 font-bold">
        ᯘ
      </div>
    </section>
  );
};

export default PageHeader;
