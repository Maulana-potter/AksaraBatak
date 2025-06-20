import React from "react";
import { BookOpenText, ScrollText, Landmark, CircleDashed } from "lucide-react";

const SejarahAksaraBatak = () => {
  const timelineItems = [
    {
      icon: <CircleDashed className="w-5 h-5" />,
      year: "Abad 13",
      title: "Asal Mula Aksara",
      content:
        "Berawal dari rumpun abugida Nusantara dengan pengaruh aksara Brahmi, Pallava, dan Kawi",
    },
    {
      icon: <ScrollText className="w-5 h-5" />,
      year: "Abad 18",
      title: "Penyebaran Regional",
      content:
        "Menyebar ke berbagai wilayah Batak dengan pengembangan varian lokal",
    },
    {
      icon: <BookOpenText className="w-5 h-5" />,
      year: "1878",
      title: "Era Misionaris",
      content:
        "Digunakan dalam pendidikan formal dan percetakan oleh misionaris Eropa",
    },
    {
      icon: <Landmark className="w-5 h-5" />,
      year: "1920-an",
      title: "Perkembangan Modern",
      content:
        "Transisi ke alfabet Latin dan upaya pelestarian di era kontemporer",
    },
  ];

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Dekorasi background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {["ᯘ", "ᯙ", "ᯚ", "ᯛ"].map((char, i) => (
          <div
            key={i}
            className={`absolute text-primary text-9xl font-bold ${
              i % 2 === 0 ? "animate-float" : "animate-float-reverse"
            }`}
            style={{
              left: `${10 + i * 25}%`,
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            {char}
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-6 md:px-16 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sejarah & Asal‑Usul{" "}
            <span className="text-primary">Aksara Batak</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Menelusuri perjalanan budaya tulis masyarakat Batak dari masa ke
            masa
          </p>
        </div>

        {/* Konten Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div className="space-y-8 relative before:absolute before:left-7 before:top-0 before:h-full before:w-0.5 before:bg-primary/30">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pl-20 group">
                <div className="absolute left-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary border-2 border-primary text-primary group-hover:bg-primary text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Deskripsi Teks */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Aksara Batak (Surat Batak atau Surat na Sampulu Sia) merupakan
                bagian dari rumpun abugida Nusantara dengan jejak historis
                hingga abad ke-13. Berakar dari sistem tulisan Brahmi melalui
                perkembangan Pallava dan Kawi, atau kemungkinan berasal dari
                aksara Proto-Sumatran yang dipengaruhi Pallava.
              </p>
              <div className="flex justify-center my-6 gap-4">
                {["ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ"].map((char, i) => (
                  <div
                    key={i}
                    className="text-3xl text-primary animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {char}
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Berkembang pertama di Mandailing, aksara ini menyebar seiring
                ekspansi budaya Batak ke wilayah Toba, Karo, Pakpak-Dairi, dan
                Simalungun. Setiap komunitas mengembangkan varian tersendiri,
                menciptakan kekayaan ragam aksara yang unik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SejarahAksaraBatak;
