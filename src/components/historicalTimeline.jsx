import React from "react";
import { Clock } from "lucide-react";

const historicalTimeline = [
  {
    year: "300 SM",
    title: "Akar Brahmi",
    description: "Berasal dari sistem abugida India Selatan.",
    detail:
      "Brahmi adalah aksara abugida kuno yang berkembang sejak abad ke‑4 SM di India, menjadi pangkal bagi banyak sistem tulisan di Asia Selatan dan Tenggara. ",
  },
  {
    year: "200 SM – 300 M",
    title: "Adaptasi Tamil‑Brahmi",
    description: "Transformasi untuk bahasa Tamil.",
    detail:
      "Tamil‑Brahmi adalah varian lokal Brahmi yang digunakan untuk bahasa Tamil sejak abad ke‑3 SM. Ia menambahkan tanda vokal khusus (/ṉ ṟ ṛ ḷ/) dan drop-inherent-vowel untuk menyesuaikan fonologi Tamil. ",
  },
  {
    year: "300 – 900 M",
    title: "Era Pallava",
    description: "Jembatan ke Nusantara.",
    detail:
      "Aksara Pallava, termasuk skrip Grantha, menjadi media penulisan keagamaan dan administratif di India Selatan sejak abad ke‑4 M. Lewat perdagangan dan agama, ia menyebar ke Asia Tenggara dan menjadi sumber utama aksara seperti Kawi dan Batak. ",
  },
  {
    year: "800 – 1500 M",
    title: "Aksara Kawi",
    description: "Standar kerajaan Nusantara.",
    detail:
      "Turunan Pallava ini lahir di Jawa pada abad ke‑8 dan digunakan luas oleh kerajaan Hindu‑Buddha untuk prasasti dan naskah, menjadi basis bagi skrip lokal seperti Batak dan Lampung. ",
  },
  {
    year: "1000 – 1200 M",
    title: "Proto‑Aksara Batak",
    description: "Formasi awal karakteristik Batak.",
    detail:
      "Pada masa ini, bentuk dan diakritik Kawi mulai disesuaikan untuk mencerminkan fonologi Batak, menghasilkan bentuk crud awal yang kemudian berkembang menjadi skrip unik Batak. ",
  },
  {
    year: "c. 1235 M",
    title: "Prasasti Sitopayan I & II",
    description: "Bukti tertua Aksara Batak.",
    detail:
      "Prasasti yang ditemukan di Padang Lawas ini menunjukkan penggunaan campuran Kawi dan karakter Batak pada Prasasti I, dan aksara Batak murni pada Prasasti II (1157 Saka ≈ 1235 M), menandai fase awal penggunaan lokal. ",
  },
  {
    year: "1300 – 1700 M",
    title: "Aksara Batak Klasik",
    description: "Lima varian berkembang dan digunakan luas.",
    detail:
      "Terbentuk varian regional (Toba, Karo, Mandailing, Pakpak‑Dairi, Simalungun). Digunakan untuk pustaha (manuskrip ritual), ratapan (hata poda), surat pribadi termasuk pulas, dan dokumen harian masyarakat. ",
  },
];

const HistoricalTimeline = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Garis Waktu </span>Evolusi Sejarah
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jejak transformasi aksara lintas peradaban dari India Kuno hingga
            Sumatra
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

          <div className="space-y-12">
            {historicalTimeline.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>

                {/* Content Card */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
                      <Clock className="w-4 h-4" />
                      {step.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 mb-4">{step.description}</p>

                    {/* Detail */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricalTimeline;
