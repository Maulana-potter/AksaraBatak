import React from "react";
import {
  BookOpen,
  PenLine,
  BrainCircuit,
  Landmark,
  ArrowRight,
} from "lucide-react";

const Panduan = () => {
  const sections = [
    {
      title: "Dasar Aksara",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      description:
        "Pelajari karakter dasar dan pengucapan aksara Batak yang benar.",
      link: "/panduan",
    },
    {
      title: "Latihan Menulis",
      icon: <PenLine className="w-6 h-6 text-primary" />,
      description:
        "Praktik menulis aksara Batak dengan teknik yang tepat dan bimbingan visual.",
      link: "/panduan",
    },
    {
      title: "Tata Bahasa",
      icon: <BrainCircuit className="w-6 h-6 text-primary" />,
      description:
        "Pahami struktur dan aturan tata bahasa dalam penulisan aksara Batak.",
      link: "/panduan",
    },
    {
      title: "Budaya",
      icon: <Landmark className="w-6 h-6 text-primary" />,
      description:
        "Eksplorasi kekayaan budaya Batak dan makna filosofis aksaranya.",
      link: "/panduan",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background/50 to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
            Belajar Tradisional
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-3">
            Panduan Belajar <span className="text-primary">Aksara Batak</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Temukan keindahan budaya Batak melalui sistem pembelajaran kami yang
            menyenangkan dan interaktif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-l-4 border-primary"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {section.title}
              </h3>
              <p className="text-foreground/70 mb-4">{section.description}</p>
              <a
                href={section.link}
                className="text-primary font-medium text-sm flex items-center hover:text-primary/80"
              >
                Mulai Belajar
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/panduan"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          >
            Lihat Panduan Lengkap
            <ArrowRight className="ml-2 animate-bounce-horizontal w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Panduan;
