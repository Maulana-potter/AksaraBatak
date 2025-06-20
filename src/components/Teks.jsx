import React from "react";
import { ArrowRight } from "lucide-react"; // Importing ArrowRight icon for the link

const Teks = () => {
  const dataTeks = [
    {
      judul: "Salam Pembuka",
      aksara: "ᯘᯚᯖᯒᯉ᯲ ᯂᯪᯔ ᯘᯬᯉ᯲",
      latin: "Horas ma hita sude",
    },
    {
      judul: "Kalimat Sehari-hari",
      aksara: "ᯂᯪᯔ ᯖᯬᯔ ᯅᯩᯖ ᯃᯬᯞ᯲",
      latin: "Ma toba hita dongan",
    },
    {
      judul: "Ucapan Terima Kasih",
      aksara: "ᯘᯬᯞ᯲ ᯇᯬᯉ᯲ ᯆᯪᯖᯒ᯲",
      latin: "Nunga gabe tarimo",
    },
    {
      judul: "Salam Selamat Pagi",
      aksara: "ᯘᯚᯖᯒᯉ᯲ ᯖᯬᯔ ᯅᯩᯖ",
      latin: "Horas selamat pagi",
    },
    {
      judul: "Ucapan Selamat Ulang Tahun",
      aksara: "ᯘᯚᯖᯒᯉ᯲ ᯇᯬᯉ᯲ ᯆᯪᯖᯒ᯲ ᯖᯬᯔ ᯅᯩᯖ",
      latin: "Horas ulang tahun",
    },
    {
      judul: "Permintaan Maaf",
      aksara: "ᯘᯬᯞ᯲ ᯇᯬᯉ᯲ ᯆᯪᯖᯒ᯲",
      latin: "Maafkan saya",
    },
    {
      judul: "Ucapan Selamat Datang",
      aksara: "ᯘᯚᯖᯒᯉ᯲ ᯇᯬᯉ᯲ ᯆᯪᯖᯒ᯲ ᯖᯬᯔ ᯅᯩᯖ",
      latin: "Selamat datang",
    },
  ];

  return (
    <section className="py-20 bg-primary/7 text-foreground">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 ">
          <span className="text-primary">Contoh Teks</span> Aksara Batak
        </h2>
        <p className="text-lg text-muted mb-12">
          Di bawah ini adalah beberapa kalimat umum dalam aksara Batak lengkap
          dengan transliterasinya.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {dataTeks.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.judul}
              </h3>
              <p className="text-4xl mb-2 font-batak">{item.aksara}</p>
              <p className="text-foreground/80 italic">{item.latin}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/teks" // Link to the TeksPages component
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          >
            Lihat Lebih Banyak Teks
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Teks;
