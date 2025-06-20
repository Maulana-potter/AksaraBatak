import React from "react";
import { ArrowRight } from "lucide-react";

const Sejarah = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 ">
          Sejarah <span className="text-primary">Aksara Batak</span>
        </h2>
        <p className="text-lg text-muted mb-10">
          Aksara Batak adalah salah satu aksara tradisional yang digunakan oleh
          masyarakat Batak di Sumatera Utara. Aksara ini bukan hanya alat
          komunikasi, tetapi juga simbol identitas dan warisan budaya yang kaya.
        </p>

        <div className="bg-card border border-border p-8 rounded-xl shadow-lg text-left leading-relaxed space-y-6 mb-12">
          <p>
            Aksara Batak berasal dari rumpun aksara Brahmi India Selatan yang
            menyebar ke Nusantara melalui perdagangan dan penyebaran agama.
            Diadaptasi oleh masyarakat Batak, aksara ini mengalami perkembangan
            unik hingga menjadi bentuk yang kita kenal saat ini.
          </p>
          <p>
            Dulu, aksara Batak digunakan untuk menulis surat, mantra, catatan
            adat, dan juga silsilah. Media penulisannya berupa bambu, kulit kayu
            (laklak), dan tulang. Setiap sub-suku Batak, seperti Toba, Karo,
            Mandailing, memiliki sedikit variasi dalam bentuk hurufnya.
          </p>
          <p>
            Sayangnya, penggunaan aksara Batak mulai menurun sejak masa kolonial
            dan modernisasi. Namun, kini banyak upaya pelestarian kembali
            dilakukan lewat digitalisasi, edukasi, dan pengajaran di sekolah
            maupun komunitas.
          </p>
        </div>

        <div className="text-center">
          <a
            href="/sejarah"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          >
            Pelajari Sejarah Lengkap
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;
