import React, { useState } from "react";

const variants = [
  {
    name: "Batak Toba",
    region: "Danau Toba dan sekitarnya",
    characteristics: "Bentuk huruf lebih bulat dan lengkung",
    sample: "ᯘᯮᯒᯖ᯲ ᯖᯬᯅ",
    photo:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center",
  },
  {
    name: "Batak Karo",
    region: "Dataran Tinggi Karo",
    characteristics: "Garis lebih tegas dan angular",
    sample: "ᯘᯮᯒᯖ᯲ ᯀᯒᯬ",
    photo:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop&crop=center",
  },
  {
    name: "Batak Pakpak",
    region: "Kabupaten Pakpak Bharat",
    characteristics: "Variasi unik dengan elemen dekoratif",
    sample: "ᯘᯮᯒᯖ᯲ ᯇᯀᯂᯇᯀᯂ᯲",
    photo:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
  },
  {
    name: "Batak Simalungun",
    region: "Kabupaten Simalungun",
    characteristics: "Pengaruh aksara Kawi yang kuat",
    sample: "ᯘᯮᯒᯖ᯲ ᯘᯪᯔᯞᯮᯉᯕᯮᯉ᯲",
    photo:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=250&fit=crop&crop=center",
  },
  {
    name: "Batak Angkola-Mandailing",
    region: "Sumatra Utara bagian selatan",
    characteristics: "Adaptasi dengan bahasa Melayu",
    sample: "ᯘᯮᯒᯖ᯲ ᯀᯉᯁᯪᯞ",
    photo:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center",
  },
];

const BatakVariantsSection = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <div className="min-h-screen text-foreground">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-8 tracking-tight">
              Variant <span className="text-primary">Aksara Batak</span>
            </h1>

            <p className=" text-foreground max-w-4xl mx-auto leading-relaxed">
              Lima variasi aksara tradisional yang menggambarkan kekayaan budaya
              suku Batak di berbagai wilayah Sumatra Utara
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Navigation */}
          <div className="space-y-4">
            {variants.map((variant, index) => (
              <button
                key={index}
                onClick={() => setSelectedVariant(index)}
                className={`w-full text-left p-6 border transition-all duration-300 ${
                  selectedVariant === index
                    ? "border-primary bg-primary/5"
                    : "border-foreground/10 hover:border-foreground/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {variant.name}
                    </h3>
                    <p className="text-foreground/60">{variant.region}</p>
                  </div>
                  <div className="text-3xl text-primary">
                    {variant.sample.split(" ")[0]}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Detail */}
          <div className="lg:sticky lg:top-16 h-fit">
            <div className="space-y-8">
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-foreground/5">
                <img
                  src={variants[selectedVariant].photo}
                  alt={variants[selectedVariant].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-2">
                    {variants[selectedVariant].name}
                  </h2>
                  <p className="text-lg text-foreground/70">
                    {variants[selectedVariant].region}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    Karakteristik
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {variants[selectedVariant].characteristics}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    Contoh Aksara
                  </h3>
                  <div className="bg-foreground/5 p-8 border border-foreground/10">
                    <div className="text-5xl text-primary font-bold text-center tracking-wider">
                      {variants[selectedVariant].sample}
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center space-x-2 pt-4">
                  {variants.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 transition-colors duration-300 ${
                        index === selectedVariant
                          ? "bg-primary"
                          : "bg-foreground/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatakVariantsSection;
