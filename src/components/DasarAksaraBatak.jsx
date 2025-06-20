import React, { useState } from "react";
import PracticeAndQuizModal from "./PracticeAndQuizModal";
import { BookOpen, Edit2, LayoutTemplate, AlignLeft, X } from "lucide-react";

const DasarAksaraBatak = () => {
  const [showPracticeModal, setShowPracticeModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);

  // Data for all sections
  const sections = [
    {
      id: 1,
      icon: <BookOpen className="w-6 h-6" />,
      title: "Ina ni Surat — Huruf Dasar",
      content: () => (
        <div className="space-y-4">
          <p className="text-foreground/80">
            19 huruf silabik dasar dengan vokal /a/ bawaan (kecuali "i" dan
            "u").
          </p>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-bold text-primary mb-2">Urutan belajar:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "a",
                "ha",
                "ka",
                "ba",
                "pa",
                "na",
                "wa",
                "ga",
                "ja",
                "da",
                "ra",
                "ma",
                "ta",
                "sa",
                "ya",
                "nga",
                "la",
                "nya",
                "i",
                "u",
              ].map((char, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-background text-foreground rounded-full border border-primary/20 text-sm font-medium hover:bg-primary/10 transition-colors"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      icon: <Edit2 className="w-6 h-6" />,
      title: "Diakritik (Anak ni Surat)",
      content: () => (
        <div className="space-y-4">
          <p className="text-foreground/80">
            Diakritik dalam Aksara Batak digunakan untuk mengubah vokal dasar
            /a/ menjadi vokal lain atau menambahkan bunyi akhir seperti /ŋ/.
            Berikut ini adalah beberapa diakritik utama:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              {
                symbol: "ᯪ",
                name: "Hauluan",
                sound: "/i/",
                example: "ᯅ → ᯅᯪ (ba → bi)",
              },
              {
                symbol: "ᯮ",
                name: "Haborotan",
                sound: "/u/",
                example: "ᯅ → ᯅᯮ (ba → bu)",
              },
              {
                symbol: "ᯬ",
                name: "Hatulungan",
                sound: "/e/",
                example: "ᯅ → ᯅᯬ (ba → be)",
              },
              {
                symbol: "ᯯ",
                name: "Sorean",
                sound: "/o/",
                example: "ᯅ → ᯅᯯ (ba → bo)",
              },
              {
                symbol: "ᯰ",
                name: "Paninggil",
                sound: "+/ŋ/",
                example: "ᯅ → ᯅᯰ (ba → bang)",
              },
              {
                symbol: "᯲",
                name: "Pangolat",
                sound: "(hapus vokal)",
                example: "ᯅ → ᯅ᯲ (ba → b)",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-3 bg-background border border-border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-center mb-1 text-primary">
                  {item.symbol}
                </div>
                <div className="text-center">
                  <div className="font-medium text-foreground">{item.name}</div>
                  <div className="text-sm text-foreground/60">{item.sound}</div>
                  <div className="text-xs mt-1 font-mono bg-primary/5 p-1 rounded text-foreground/80">
                    {item.example}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      id: 3,
      icon: <LayoutTemplate className="w-6 h-6" />,
      title: "Struktur Suku Kata",
      content: () => (
        <div className="space-y-4">
          {/* Contoh 1 */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex justify-center space-x-1 items-baseline mb-3">
              <span className="text-xl font-bold text-primary">ᯅ</span>
              <span className="text-lg text-foreground/50">+</span>
              <span className="text-xl font-bold text-primary">ᯪ</span>
              <span className="text-lg text-foreground/50">=</span>
              <span className="text-2xl font-bold text-primary">ᯅᯪ</span>
              <span className="text-sm text-foreground/60 ml-2">(bi)</span>
            </div>
            <p className="text-center text-sm text-foreground/80">
              Ina ni Surat + Diakritik = Suku Kata
            </p>
          </div>

          {/* Contoh 2: dengan Paninggil */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex justify-center space-x-1 items-baseline mb-3">
              <span className="text-xl font-bold text-primary">ᯅ</span>
              <span className="text-lg text-foreground/50">+</span>
              <span className="text-xl font-bold text-primary">ᯰ</span>
              <span className="text-lg text-foreground/50">=</span>
              <span className="text-2xl font-bold text-primary">ᯅᯰ</span>
              <span className="text-sm text-foreground/60 ml-2">(bang)</span>
            </div>
            <p className="text-center text-sm text-foreground/80">
              Ina ni Surat + Paninggil (/ŋ/) = Akhiran nasal
            </p>
          </div>

          {/* Contoh 3: dengan dua diakritik */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex justify-center space-x-1 items-baseline mb-3">
              <span className="text-xl font-bold text-primary">ᯅ</span>
              <span className="text-lg text-foreground/50">+</span>
              <span className="text-xl font-bold text-primary">ᯮ</span>
              <span className="text-lg text-foreground/50">+</span>
              <span className="text-xl font-bold text-primary">ᯰ</span>
              <span className="text-lg text-foreground/50">=</span>
              <span className="text-2xl font-bold text-primary">ᯅᯮᯰ</span>
              <span className="text-sm text-foreground/60 ml-2">(bung)</span>
            </div>
            <p className="text-center text-sm text-foreground/80">
              Ina ni Surat + Diakritik vokal + Paninggil = Kombinasi kompleks
            </p>
          </div>

          {/* Contoh 4: Penggunaan Pangolat */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex justify-center space-x-1 items-baseline mb-3">
              <span className="text-xl font-bold text-primary">ᯅ</span>
              <span className="text-lg text-foreground/50">+</span>
              <span className="text-xl font-bold text-primary">᯲</span>
              <span className="text-lg text-foreground/50">=</span>
              <span className="text-2xl font-bold text-primary">ᯅ᯲</span>
              <span className="text-sm text-foreground/60 ml-2">
                (b - tanpa vokal)
              </span>
            </div>
            <p className="text-center text-sm text-foreground/80">
              Ina ni Surat + Pangolat = Menghilangkan vokal bawaan
            </p>
          </div>
        </div>
      ),
    },

    {
      id: 4,
      icon: <AlignLeft className="w-6 h-6" />,
      title: "Aturan Penulisan",
      content: () => (
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
              1
            </span>
            <div>
              <h4 className="font-bold text-foreground">Arah Penulisan</h4>
              <p className="text-sm text-foreground/80">
                Ditulis dari kiri ke kanan dan dari atas ke bawah, mengikuti
                arah penulisan modern.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
              2
            </span>
            <div>
              <h4 className="font-bold text-foreground">Pemisah Kata</h4>
              <p className="text-sm text-foreground/80">
                Gunakan <span className="font-bold">bindu</span> (tanda titik
                kecil ᯼) sebagai pemisah antar kata atau kalimat, bukan spasi.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
              3
            </span>
            <div>
              <h4 className="font-bold text-foreground">Penulisan Diakritik</h4>
              <p className="text-sm text-foreground/80">
                Diakritik (anak ni surat) harus diletakkan di posisi tertentu
                pada huruf konsonan, misalnya ᯅ + ᯪ untuk 'bi'.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
              4
            </span>
            <div>
              <h4 className="font-bold text-foreground">Pangolat (᯲)</h4>
              <p className="text-sm text-foreground/80">
                Gunakan pangolat untuk menghilangkan vokal bawaan /a/ jika
                konsonan berdiri sendiri di akhir suku kata.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
              5
            </span>
            <div>
              <h4 className="font-bold text-foreground">Konsistensi Gaya</h4>
              <p className="text-sm text-foreground/80">
                Gunakan varian bentuk huruf yang konsisten (Toba, Mandailing,
                atau lainnya) agar tidak bercampur dalam satu naskah.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Practice examples and quiz questions
  const practiceExamples = [
    {
      question: "Bagaimana menulis 'bi'?",
      answer: "ᯅᯪ",
      explanation: "Gabungan ba (ᯅ) + hauluan (/i/ diakritik ᯪ)",
    },
    {
      question: "Bagaimana menulis 'bang'?",
      answer: "ᯅᯰ",
      explanation: "Gabungan ba (ᯅ) + paninggil (/ŋ/ diakritik ᯰ)",
    },
    {
      question: "Bagaimana menulis 'bung'?",
      answer: "ᯅᯮᯰ",
      explanation: "Gabungan ba (ᯅ) + haborotan (/u/ ᯮ) + paninggil (ᯰ)",
    },
    {
      question: "Bagaimana menulis 'tu'?",
      answer: "ᯖᯮ",
      explanation: "Gabungan ta (ᯖ) + haborotan (/u/ diakritik ᯮ)",
    },
    {
      question: "Bagaimana menulis 'ting'?",
      answer: "ᯖᯪᯰ",
      explanation: "Gabungan ta (ᯖ) + hauluan (/i/) + paninggil (/ŋ/)",
    },
    {
      question: "Bagaimana menulis 'so'?",
      answer: "ᯘᯯ",
      explanation: "Gabungan sa (ᯘ) + diakritik soreon (/o/ ᯯ)",
    },
    {
      question: "Bagaimana menulis 'ra'?",
      answer: "ᯒ",
      explanation: "Huruf dasar ra (ᯒ) sudah membawa vokal /a/ bawaan",
    },
    {
      question: "Bagaimana menulis 'ki'?",
      answer: "ᯂᯪ",
      explanation: "Gabungan ka (ᯂ) + hauluan (/i/ diakritik ᯪ)",
    },
  ];

  const quizQuestions = [
    {
      question: "Aksara apa yang tepat untuk 'bi'?",
      options: ["ᯅᯪ", "ᯅᯮ", "ᯅᯰ", "ᯅ᯲"],
      answer: "ᯅᯪ",
      explanation: "'bi' menggunakan ba (ᯅ) + hauluan (ᯪ)",
    },
    {
      question: "Aksara yang benar untuk 'bung' adalah?",
      options: ["ᯅᯮ", "ᯅᯮᯰ", "ᯅᯰᯮ", "ᯅᯯᯰ"],
      answer: "ᯅᯮᯰ",
      explanation: "'bung' = ba + haborotan (/u/) + paninggil (/ŋ/)",
    },
    {
      question: "Bagaimana cara menulis 'so' dalam Aksara Batak?",
      options: ["ᯘᯰ", "ᯘᯮ", "ᯘᯯ", "ᯘ᯲"],
      answer: "ᯘᯯ",
      explanation: "'so' menggunakan sa (ᯘ) + soreon (/o/)",
    },
    {
      question:
        "Apa yang terjadi jika diakritik 'pangolat' (᯲) ditambahkan ke huruf konsonan?",
      options: [
        "Mengubah vokal menjadi /i/",
        "Menghapus vokal bawaan",
        "Menambahkan bunyi /ŋ/",
        "Mengubah ke huruf kapital",
      ],
      answer: "Menghapus vokal bawaan",
      explanation: "᯲ = pangolat, untuk meniadakan vokal /a/",
    },
    {
      question: "Aksara 'ra' tanpa diakritik melambangkan bunyi apa?",
      options: ["ri", "ru", "ra", "ro"],
      answer: "ra",
      explanation: "Huruf konsonan dasar melambangkan bunyi /a/",
    },
    {
      question: "Mana bentuk yang benar untuk 'ting'?",
      options: ["ᯖᯰ", "ᯖᯮᯰ", "ᯖᯪᯰ", "ᯖᯪ"],
      answer: "ᯖᯪᯰ",
      explanation: "'ting' terdiri dari ta (ᯖ), hauluan (ᯪ), dan paninggil (ᯰ)",
    },
  ];

  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-foreground mb-4">
              Dasar <span className="text-primary">Aksara Batak</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto"></div>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mt-6">
              Panduan lengkap untuk memulai belajar aksara tradisional Batak
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="flex items-start mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mr-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mt-2">
                    {section.id}. {section.title}
                  </h3>
                </div>
                {section.content()}
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => setShowPracticeModal(true)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Latihan
            </button>
            <button
              onClick={() => setShowQuizModal(true)}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Kuis
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      {showPracticeModal && (
        <PracticeAndQuizModal
          mode="practice"
          isOpen={showPracticeModal}
          onClose={() => setShowPracticeModal(false)}
          practiceExamples={practiceExamples}
        />
      )}
      {showQuizModal && (
        <PracticeAndQuizModal
          mode="quiz"
          isOpen={showQuizModal}
          onClose={() => setShowQuizModal(false)}
          quizQuestions={quizQuestions}
        />
      )}
    </>
  );
};

export default DasarAksaraBatak;
