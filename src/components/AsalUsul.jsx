import React from "react";
import { Archive, BookOpen } from "lucide-react";

const batakCharacters = [
  { char: "ᯀ", name: "A", evolution: "Dari Brahmi 𑀅" },
  { char: "ᯅ", name: "Ba", evolution: "Dari Brahmi 𑀩" },
  { char: "ᯇ", name: "Ca", evolution: "Dari Brahmi 𑀘" },
  { char: "ᯑ", name: "Da", evolution: "Dari Brahmi 𑀤" },
  { char: "ᯙ", name: "Ga", evolution: "Dari Brahmi 𑀕" },
  { char: "ᯖ", name: "Ha", evolution: "Dari Brahmi 𑀳" },
];

export default function AsalUsul() {
  return (
    <section className="py-16 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-8 shadow-lg border border-primary">
            <Archive className="w-10 h-10 text-primary mr-3" />
            <BookOpen className="w-10 h-10 text-foreground" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Asal Usul
            <span className="text-primary"> Aksara Batak</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mx-auto leading-relaxed mb-6 text-justify">
            Aksara Batak, yang dikenal sebagai{" "}
            <em className="text-primary font-semibold">Surat na Sampulu Sia</em>
            , memiliki akar sejarah yang dalam dan kompleks. Sistem penulisan
            ini merupakan hasil evolusi panjang dari tradisi Brahmi India yang
            telah mengalami adaptasi dan transformasi selama lebih dari seribu
            tahun.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mx-auto leading-relaxed mb-6 text-justify">
            Aksara ini mulai muncul di Sumatra Utara sekitar abad ke-13,
            sebagaimana terlihat dari Prasasti Sitopayan I & II—dokumen kuno
            yang mencampurkan aksara Kawi dan Batak—dan menjadi bagian identitas
            budaya masyarakat Batak. Aksara Batak memiliki 19 huruf dasar dan
            sistem diakritik yang canggih, memungkinkannya merekam fonem Batak
            secara presisi.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mx-auto leading-relaxed mb-6 text-justify">
            Sejak abad ke-13, aksara ini berkembang ke lima varian—Toba, Karo,
            Mandailing-Angkola, Pakpak-Dairi, dan Simalungun—dan digunakan
            secara luas: dari naskah ritual di pustaha (kulit kayu lipat) hingga
            surat pribadi dan ratapan—bahkan surat “pulas”. Pada abad ke-20,
            penggunaannya menurun seiring modernisasi, namun kini aksara ini
            kembali digalakkan melalui digitalisasi (Unicode sejak 2010),
            standarisasi, edukasi di sekolah, dan revitalisasi budaya.
          </p>

          {/* Batak Characters Evolution Display */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {batakCharacters.map((char, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary group-hover:border-foreground transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <span className="text-3xl font-bold text-primary">
                    {char.char}
                  </span>
                </div>
                <span className="text-sm text-gray-600 mt-2 font-medium">
                  {char.name}
                </span>
                <span className="text-xs text-gray-500 mt-1 italic">
                  {char.evolution}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
