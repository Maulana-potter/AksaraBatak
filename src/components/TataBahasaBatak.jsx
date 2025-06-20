import React from "react";
import {
  BookOpenText,
  LibraryBig,
  ScrollText,
  Code2,
  Type,
  BookType,
} from "lucide-react";

const TataBahasaBatak = () => {
  const grammarRules = [
    {
      icon: <Type className="w-5 h-5" />,
      title: "Vokal Bawaan & Struktur Suku Kata",
      description:
        "Setiap konsonan dasar memiliki vokal bawaan /a/ yang dapat diubah dengan diakritik atau dihilangkan menggunakan pangolat.",
      example: {
        text: "Contoh: 'tip' → ta + hauluan + pangolat",
        script: "ᯖᯪᯇ᯲",
      },
      references: [
        {
          name: "Unicode Standard",
          url: "https://id.wikipedia.org/wiki/Batak_(blok_Unicode)",
        },
      ],
    },
    {
      icon: <BookType className="w-5 h-5" />,
      title: "Posisi Diakritik",
      description:
        "Diakritik selalu ditempatkan di akhir suku kata, dengan pengecualian tertentu untuk nasal /ŋ/.",
      example: {
        text: "Contoh penulisan nasal 'bang'",
        script: "ᯅ + ᯰ → ᯅᯰ",
      },
      references: [
        {
          name: "Batak Script Grammar",
          url: "https://en.wikipedia.org/wiki/Batak_script",
        },
      ],
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Tidak Ada Konjungsi",
      description:
        "Aksara Batak tidak memiliki gabungan konsonan berturut-turut (conjunct), setiap suku kata berdiri sendiri.",
      example: {
        text: "Setiap suku: C(V)(C)",
        script: "",
      },
    },
    {
      icon: <ScrollText className="w-5 h-5" />,
      title: "Sistem Bindu",
      description:
        "Menggunakan ornamen bindu sebagai pengganti spasi dan tanda baca, dengan fungsi berbeda-beda.",
      example: {
        text: "Jenis-jenis bindu: • (na metek), ➲ (pangolat)",
        script: "",
      },
      references: [
        {
          name: "Batak Orthography",
          url: "https://r12a.github.io/scripts/batk/btk.html",
        },
      ],
    },
    {
      icon: <LibraryBig className="w-5 h-5" />,
      title: "Dukungan Digital",
      description:
        "Memiliki blok Unicode spesifik (U+1BC0–U+1BFF) dan didukung font modern dengan kompleksitas diakritik.",
      example: {
        text: "Contoh font: Noto Sans Batak",
        script: "",
      },
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
          <BookOpenText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold  mb-2">
          Tata Bahasa <span className="text-primary"> Aksara Batak</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Aturan struktural dan konvensi penulisan tradisional
        </p>
      </div>

      {/* Main Content - Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grammarRules.map((rule, index) => (
          <div
            key={index}
            className="group relative bg-card rounded-xl shadow-sm hover:shadow-md transition-all border border-border overflow-hidden"
          >
            {/* Gradient Decoration */}
            <div className="absolute inset-x-0 top-0 h-1 bg-primary" />

            {/* Card Content */}
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-primary/10 text-primary rounded-lg p-3 mr-4">
                  {rule.icon}
                </div>
                <h2 className="text-xl font-semibold text-foreground line-clamp-1">
                  {rule.title}
                </h2>
              </div>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                {rule.description}
              </p>

              {rule.example && (
                <div className="mt-4 p-3 bg-primary-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium">
                    {rule.example.text}
                  </p>
                  {rule.example.script && (
                    <p className="text-3xl font-bold mt-2 text-center font-serif">
                      {rule.example.script}
                    </p>
                  )}
                </div>
              )}

              {rule.references && rule.references.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Referensi
                  </h4>
                  <ul className="space-y-1">
                    {rule.references.map((ref, i) => (
                      <li key={i}>
                        <a
                          href={ref.url}
                          className="text-sm text-primary hover:underline inline-flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {ref.name}
                          <svg
                            className="w-3 h-3 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Supplemental Info Section */}
      <div className="mt-16 p-8 rounded-xl bg-card border border-primary/10 shadow-lg">
        <div className="md:flex items-start gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-foreground mb-3 border-b border-primary pb-2">
              Petunjuk Penggunaan Tata Bahasa
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Mulai dengan mengenali huruf dasar dan vokal bawaan</li>
              <li>Pelajari pola penempatan diakritik yang benar</li>
              <li>Praktikkan penulisan bindu sebagai pemisah</li>
              <li>Fokus pada suku kata tunggal sebelum menggabungkan</li>
            </ol>
          </div>
          <div className="md:w-1/2 p-6   ">
            <h4 className="font-bold text-lg flex items-center mb-3">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Tip Penting:
            </h4>
            <p className="text-muted-foreground">
              Dalam penulisan tradisional, penggunaan ornamentasi bindu (seperti
              •, ❲ ❳, ➲) bisa berbeda antar wilayah suku Batak. Toba cenderung
              menggunakan titik bulat, sementara Karo lebih banyak menggunakan
              garis vertikal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TataBahasaBatak;
