import React from "react";

const StrukturSistemTulisan = () => {
  const examples = [
    {
      char: "ᯅ",
      diacritic: "ᯪ",
      result: "ᯅᯪ (bi)",
      desc: "Hauluan (/i/) di kanan karakter",
    },
    {
      char: "ᯅ",
      diacritic: "ᯮ",
      result: "ᯅᯮ (bu)",
      desc: "Haborotan (/u/) di bawah karakter",
    },
    {
      char: "ᯅ",
      diacritic: "ᯩ",
      result: "ᯅᯩ (be)",
      desc: "Hahehas (/e/) di kiri karakter",
    },
    {
      char: "ᯅ",
      diacritic: "ᯬ",
      result: "ᯅᯬ (bo)",
      desc: "Haheham (/o/) di atas karakter",
    },
    {
      char: "ᯅ",
      diacritic: "ᯰ",
      result: "ᯅᯰ (bang)",
      desc: "Paninggil (/ŋ/) di atas karakter",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-background to-muted">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {["ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ"].map((char, i) => (
          <div
            key={i}
            className="absolute text-primary/30 text-9xl font-bold"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + i * 5}%`,
            }}
          >
            {char}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
            Sistem Penulisan
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Struktur <span className="text-primary">Aksara Batak</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Explanation */}
          <div className="bg-card p-8 rounded-2xl shadow-xl border border-border space-y-6">
            {/* Abugida */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Konsep Abugida
              </h3>
              <p className="text-muted-foreground">
                Aksara Batak menggunakan sistem{" "}
                <strong className="text-foreground">abugida</strong>, di mana
                setiap huruf konsonan dasar (
                <span className="font-semibold text-foreground">
                  ina ni surat
                </span>
                ) mengandung vokal bawaan <em>/a/</em>. Huruf ini merupakan
                dasar dari sistem tulisan Batak.
              </p>
            </div>

            {/* Diakritik */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Diakritik & Modifikasi
              </h3>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Anak ni surat
                </span>{" "}
                (diakritik) digunakan untuk mengubah vokal menjadi{" "}
                <em>/i/, /u/, /e/, /o/</em> atau menambahkan konsonan penutup{" "}
                <em>/ŋ/</em>. Sedangkan{" "}
                <span className="font-semibold text-foreground">
                  pangolatan
                </span>{" "}
                digunakan untuk meniadakan vokal bawaan /a/ dari konsonan.
              </p>
            </div>

            {/* Digitalisasi */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Digitalisasi
              </h3>
              <p className="text-muted-foreground">
                Sejak 2010, Aksara Batak diakui secara global melalui{" "}
                <strong className="text-foreground">Unicode 6.0</strong> dengan
                blok karakter <code>U+1BC0–U+1BFF</code>. Ini memungkinkan
                aksara ini digunakan dalam font digital dan aplikasi daring.
              </p>
            </div>

            {/* Variasi Regional */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Variasi Regional
              </h3>
              <p className="text-muted-foreground">
                Terdapat perbedaan bentuk huruf dan penggunaan antara sub-suku
                Batak: Toba, Karo, Mandailing, Pakpak, Angkola, dan Simalungun.
                Namun semuanya berasal dari akar sistem tulisan yang sama.
              </p>
            </div>

            {/* Media Tradisional */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Media Tradisional
              </h3>
              <p className="text-muted-foreground">
                Aksara Batak ditulis di atas{" "}
                <strong className="text-foreground">pustaha laklak</strong>{" "}
                (manuskrip dari kulit kayu), bambu, atau tulang, dan digunakan
                oleh <em>datu</em> untuk mencatat ilmu pengobatan, mantra, dan
                adat.
              </p>
            </div>

            {/* Pelestarian Modern */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Pelestarian Modern
              </h3>
              <p className="text-muted-foreground">
                Kini, pelestarian Aksara Batak didukung melalui pengajaran
                sekolah, transliterasi digital, aplikasi edukatif, hingga
                komunitas daring yang berfokus pada literasi budaya lokal.
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 bg-primary/10 p-3 rounded-lg text-foreground">
                    {ex.char} + {ex.diacritic} = {ex.result}
                  </div>
                </div>
                <div className="text-muted-foreground">
                  <span className="font-medium text-primary">Contoh:</span>{" "}
                  {ex.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrukturSistemTulisan;
