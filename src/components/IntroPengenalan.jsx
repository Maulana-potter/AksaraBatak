import React from "react";

const IntroPengenalan = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold  mb-8 text-center">
          Apa itu <span className="text-primary">Aksara Batak?</span>
        </h2>
        <div className="bg-card border border-border p-8 rounded-xl shadow-lg">
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:block space-y-6 text-lg leading-relaxed text-justify">
            <div className="float-right ml-6 mb-4 w-80 max-w-[40%]">
              <img
                src="./image.png"
                alt="Manuskrip Aksara Batak tradisional pada pustaha laklak"
                className="w-full h-auto rounded-lg shadow-lg border border-primary/20"
              />
              <p className="text-sm text-foreground/70 mt-2 text-center italic bg-background/80 p-2 rounded">
                Contoh manuskrip Aksara Batak pada pustaha laklak
              </p>
            </div>

            <p>
              <strong className="text-primary">Aksara Batak</strong> atau{" "}
              <em>Surat Batak</em> adalah sistem tulisan abugida tradisional
              yang digunakan untuk menulis bahasa Batak—termasuk Toba, Karo,
              Mandailing, Angkola, Pakpak‑Dairi, dan Simalungun—di wilayah
              Sumatra Utara sejak abad ke‑13.
            </p>

            <p>
              Setiap karakter dasar, disebut{" "}
              <strong className="text-primary">ina ni surat</strong>,
              menyertakan vokal <em>/a/</em> bawaan dan dapat dimodifikasi
              dengan tanda diakritik—
              <strong className="text-primary">anak ni surat</strong>—untuk
              menghasilkan vokal lain (<em>/i/, /u/, /e/, /o/</em>) atau
              menambahkan bunyi nasal <em>/ŋ/</em> ataupun menghapus vokal (
              <strong className="text-primary">pangolat</strong>).
            </p>

            <div className="float-left mr-6 mb-4 w-72 max-w-[35%]">
              <img
                src="./image.png"
                alt="Karakter-karakter Aksara Batak"
                className="w-full h-auto rounded-lg shadow-lg border border-primary/20"
              />
              <p className="text-sm text-foreground/70 mt-2 text-center italic bg-background/80 p-2 rounded">
                Bentuk-bentuk karakter Aksara Batak
              </p>
            </div>

            <p>
              Aksara ini berkembang dari aksara Brahmi melalui jalur
              Pallava–Kawi, dan mencerminkan tradisi tulisan Nusantara dengan
              ragam bentuk unik di setiap komunitas Batak.
            </p>

            <p>
              Secara budaya, Aksara Batak ditulis dalam{" "}
              <strong className="text-primary">pustaha laklak</strong>—manuskrip
              dari kulit kayu, bambu, atau tulang yang ditulis oleh{" "}
              <em>datu</em> untuk mencatat ilmu adat, spiritual, ramuan obat,
              mantra, hingga ritual kepercayaan.
            </p>

            <p>
              Meskipun sempat menyusut akibat pengaruh aksara Latin dan masuknya
              agama dari pesisir pada abad ke‑20, Aksara Batak kini mengalami
              kebangkitan melalui standar modern (<em>1952 Natogaraja</em>),
              pengajaran di sekolah, digitalisasi font Unicode (blok
              U+1BC0–U+1BFF sejak 2010), dan transliterasi daring.
            </p>

            <div className="clear-both"></div>
          </div>

          {/* Mobile Layout - Visible only on mobile */}
          <div className="md:hidden space-y-6 text-base leading-relaxed">
            <div className="w-full mb-6">
              <img
                src="./image.png"
                alt="Manuskrip Aksara Batak tradisional pada pustaha laklak"
                className="w-full h-auto rounded-lg shadow-lg border border-primary/20"
              />
              <p className="text-sm text-foreground/70 mt-3 text-center italic bg-background/80 p-3 rounded">
                Contoh manuskrip Aksara Batak pada pustaha laklak
              </p>
            </div>

            <p className="text-justify">
              <strong className="text-primary">Aksara Batak</strong> atau{" "}
              <em>Surat Batak</em> adalah sistem tulisan abugida tradisional
              yang digunakan untuk menulis bahasa Batak—termasuk Toba, Karo,
              Mandailing, Angkola, Pakpak‑Dairi, dan Simalungun—di wilayah
              Sumatra Utara sejak abad ke‑13.
            </p>

            <p className="text-justify">
              Setiap karakter dasar, disebut{" "}
              <strong className="text-primary">ina ni surat</strong>,
              menyertakan vokal <em>/a/</em> bawaan dan dapat dimodifikasi
              dengan tanda diakritik—
              <strong className="text-primary">anak ni surat</strong>—untuk
              menghasilkan vokal lain (<em>/i/, /u/, /e/, /o/</em>) atau
              menambahkan bunyi nasal <em>/ŋ/</em> ataupun menghapus vokal (
              <strong className="text-primary">pangolat</strong>).
            </p>

            <div className="w-full mb-6">
              <img
                src="./image.png"
                alt="Karakter-karakter Aksara Batak"
                className="w-full h-auto rounded-lg shadow-lg border border-primary/20"
              />
              <p className="text-sm text-foreground/70 mt-3 text-center italic bg-background/80 p-3 rounded">
                Bentuk-bentuk karakter Aksara Batak
              </p>
            </div>

            <p className="text-justify">
              Aksara ini berkembang dari aksara Brahmi melalui jalur
              Pallava–Kawi, dan mencerminkan tradisi tulisan Nusantara dengan
              ragam bentuk unik di setiap komunitas Batak.
            </p>

            <p className="text-justify">
              Secara budaya, Aksara Batak ditulis dalam{" "}
              <strong className="text-primary">pustaha laklak</strong>—manuskrip
              dari kulit kayu, bambu, atau tulang yang ditulis oleh{" "}
              <em>datu</em> untuk mencatat ilmu adat, spiritual, ramuan obat,
              mantra, hingga ritual kepercayaan.
            </p>

            <p className="text-justify">
              Meskipun sempat menyusut akibat pengaruh aksara Latin dan masuknya
              agama dari pesisir pada abad ke‑20, Aksara Batak kini mengalami
              kebangkitan melalui standar modern (<em>1952 Natogaraja</em>),
              pengajaran di sekolah, digitalisasi font Unicode (blok
              U+1BC0–U+1BFF sejak 2010), dan transliterasi daring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPengenalan;
