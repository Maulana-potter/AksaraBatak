import React from "react";
import { BookOpen, Globe, Shield, Users } from "lucide-react";

const BudayaMaknaSosialAksaraBatak = () => {
  const culturalSections = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "1. Pustaha: Nadi Tradisi Ritual",
      description: (
        <>
          Pustaha adalah “buku” magis Batak—manuskrip lipat (laklak) yang
          ditulis oleh datu untuk merekam mantra, ramuan obat, kalender, hingga
          petunjuk ritual dan hukum adat.
          <br />
          <strong>Bahan & simbol:</strong> Ditulis pada kulit kayu pohon alim
          atau bambu, dilapisi antara dua sampul kayu yang sering dihiasi
          gorga—motif ukir atau lukisan warna merah, putih, hitam—melambangkan
          kosmologi Batak: tiga alam (banua ginjang/tonga/toru) dan ketahanan
          terhadap roh jahat.
          <br />
          <strong>Isi pustaha (hadatuon):</strong> terbagi menjadi:
          <ul className="list-disc pl-5 mt-2">
            <li>
              Ilmu pelindung / pengobatan (saint magic, white magic): ramuan
              penyembuhan, jimat.
            </li>
            <li>
              Ilmu hitam / kutukan (pupuk & black magic): termasuk resep
              membangkitkan roh melalui pupuk dan ritual gelap.
            </li>
            <li>
              Nujum / ramalan: astrologi, penentu hari baik, sistem porhalaan.
            </li>
          </ul>
          <strong>Fungsi sosial & identitas:</strong> Menjadi sumber otoritas
          spiritual; pustaha hanya dapat ditulis dan diwarisi dari satu datu ke
          muridnya. Simbol kekuasaan magis dan kesatuan sosial Batak, sekaligus
          perekat adat andalan hingga abad ke-19.
        </>
      ),
      references: [
        {
          text: "en.wikipedia.org",
          link: "https://id.wikipedia.org/wiki/Pustaha#:~:text=Pustaha%20%28dalam%20kelompok%20bahasa%20Batak%20Utara%2C%20dikenal%20sebagai,%28datu%29%20sebagai%20catatan%20pribadi%20mengenai%20ilmu%20kedukunan%20%28hadatuan%29.",
          votes: 13,
        },
      ],
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "2. Gorga & Ornamen Spiritual",
      description: (
        <>
          <strong>Motif gorga:</strong> Berupa ukiran dan lukisan di kayu –
          biasanya merah, putih, hitam (sitiga bolit). Mewakili alam atas,
          tengah, dan bawah. Digunakan untuk melindungi struktur rumah, perabot,
          dan pustaha dari bahaya roh jahat.
          <br />
          <strong>Kepercayaan kosmologi:</strong> Motif seperti gorga ulu singa
          (kepala singa-serpent) dan gorga boraspati (cicak) mewakili dewa
          pelindung seperti Boraspati ni Tano dan Naga Padoha, mencerminkan
          ikatan spiritual masyarakat Batak terhadap akar budaya Hindu dan
          animisme.
        </>
      ),
      references: [
        {
          text: "delitimes.id",
          link: "https://delitimes.id/gorga-batak-seni-visual-yang-mencerminkan-nilai-budaya-masyarakat-batak-toba/",
        },
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "3. Identitas & Pelembagaan Warisan",
      description: (
        <>
          <strong>Tulisan sebagai identitas etnik:</strong> Aksara Batak,
          meskipun kini lebih sering digunakan untuk keperluan seremonial dan
          estetika, tetap menjadi simbol budaya yang kuat—muncul di papan nama,
          suvenir hingga busana khas Batak.
          <br />
          <strong>Dalam kurikulum & komunitas:</strong> Sejak digitalisasi
          (Unicode 2010) dan workshop lokal, aksara ini kembali diajarkan di
          sekolah-sekolah di Sumatra Utara sebagai muatan lokal dan tanda
          kebanggaan budaya—meski tetap bersifat simbolis, bukan sistem
          penulisan sehari-hari.
        </>
      ),
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "4. Panji Modern & Digitalisasi",
      description: (
        <>
          <strong>Kontemporer:</strong> Aksara ini mulai diintegrasikan ke font
          digital seperti Noto Sans Batak. Digambar ulang untuk poster, T‑shirt,
          dan produk desain kreatif sebagai warisan budaya yang hidup.
          <br />
          <strong>Kesadaran global:</strong> Meski belum didukung di semua
          sistem operasi, gerakan lintas platform (web, mobile, panlex.org)
          mulai menguatkan posisi Aksara Batak sebagai identitas budaya global
          milik 8 juta penutur sehari-hari.
        </>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold  mb-2">
          Budaya & Makna Sosial{" "}
          <span className="text-primary">Aksara Batak</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Menyelami kekayaan budaya dan makna sosial dari Aksara Batak
        </p>
      </div>

      {/* Main Content - Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {culturalSections.map((section, index) => (
          <div
            key={index}
            className="bg-card rounded-lg shadow-md p-6 border border-border"
          >
            <div className="flex items-start mb-4">
              <div className="flex items-center justify-center bg-primary/10 text-primary rounded-lg p-3 mr-4">
                {section.icon}
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                {section.title}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {section.description}
            </p>
            {section.references && section.references.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border/50">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Referensi
                </h4>
                <ul className="space-y-1">
                  {section.references.map((ref, i) => (
                    <li key={i}>
                      <a
                        href={ref.link}
                        className="text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {ref.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudayaMaknaSosialAksaraBatak;
