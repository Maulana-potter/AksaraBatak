import React, { useState } from "react";

const galleryImages = [
  {
    id: 1,
    title: "Prasasti Batak Kuno",
    description: "Prasasti aksara Batak yang terukir di batu vulkanik",
    image: " ",
  },
  {
    id: 2,
    title: "Pustaha Laklak",
    description: "Buku tradisional Batak yang terbuat dari kulit kayu",
    image: " ",
  },
  {
    id: 3,
    title: "Ukiran Surat Batak",
    description: "Aksara Batak yang diukir pada bambu tradisional",
    image: " ",
  },
  {
    id: 4,
    title: "Naskah Batak Toba",
    description: "Koleksi naskah kuno aksara Batak Toba",
    image: "",
  },
  {
    id: 5,
    title: "Aksara di Rumah Adat",
    description: "Aksara Batak yang menghiasi rumah adat tradisional",
    image: "",
  },
  {
    id: 6,
    title: "Pembelajaran Aksara",
    description: "Proses pembelajaran aksara Batak generasi muda",
    image: "",
  },
  {
    id: 7,
    title: "Festival Aksara Batak",
    description: "Perayaan budaya aksara Batak di festival tahunan",
    image: " ",
  },
  {
    id: 8,
    title: "Kaligrafi Modern",
    description: "Interpretasi modern aksara Batak dalam seni kaligrafi",
    image: "",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="min-h-screen mt-16">
      {/* Header */}
      <div className="px-4 py-12 md:px-8 md:py-16 text-center">
        <h1 className="text-5xl font-bold  mb-6">
          Galeri <span className="text-primary"> Aksara Batak</span>
        </h1>
        <p className="text-lg text-gray-700">
          Dokumentasi visual warisan aksara Batak dari masa ke masa
        </p>
      </div>

      {/* Masonry Gallery */}
      <div className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredImage === image.id ? "opacity-30" : "opacity-0"
                }`}
              />
              <div
                className={`absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-300 ${
                  hoveredImage === image.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-white font-semibold text-lg">
                  {image.title}
                </h3>
                <p className="text-white/90">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/97 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl w-full max-h-full flex flex-col">
            {/* Enhanced Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {selectedImage.title.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 text-sm capitalize">Collection</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Footer */}
            <div className="mt-4 text-center">
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
