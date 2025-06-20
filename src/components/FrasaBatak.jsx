import React, { useState } from "react";
import {
  MessageSquare,
  ChevronRight,
  BookOpen,
  Search,
  Filter,
} from "lucide-react";
import phrases from "../teks.json";

const FrasaBatak = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Group phrases by category
  const groupedPhrases = phrases.reduce((acc, phrase) => {
    if (!acc[phrase.kategori]) {
      acc[phrase.kategori] = [];
    }
    acc[phrase.kategori].push(phrase);
    return acc;
  }, {});

  const categories = Object.keys(groupedPhrases);

  // Filter phrases based on search and category
  const filteredGroupedPhrases = Object.entries(groupedPhrases).reduce(
    (acc, [category, items]) => {
      if (selectedCategory !== "all" && selectedCategory !== category) {
        return acc;
      }

      const filteredItems = items.filter(
        (phrase) =>
          phrase.transliterasi
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          phrase.arti.toLowerCase().includes(searchTerm.toLowerCase()) ||
          phrase.kategori.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredItems.length > 0) {
        acc[category] = filteredItems;
      }
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-6 shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-primary mb-4">
            Frasa Bahasa Batak
          </h1>

          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>

          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Kumpulan frasa umum dalam Aksara Batak beserta terjemahannya
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari frasa, transliterasi, atau arti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-4 h-4" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground appearance-none cursor-pointer min-w-[200px]"
              >
                <option value="all">Semua Kategori</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        {(searchTerm || selectedCategory !== "all") && (
          <div className="mb-8 text-center">
            <p className="text-foreground/70 bg-white inline-block px-4 py-2 rounded-full border border-gray-200">
              Ditemukan {Object.values(filteredGroupedPhrases).flat().length}{" "}
              frasa
            </p>
          </div>
        )}

        {/* Categories and Phrases */}
        <div className="space-y-12">
          {Object.entries(filteredGroupedPhrases).map(([category, items]) => (
            <div key={category}>
              {/* Phrase Rows */}
              <div className="space-y-4">
                {items.map((phrase) => (
                  <div
                    key={phrase.id}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Category Header */}
                    <div className="bg-primary/80 text-white px-6 py-3 rounded-t-xl">
                      <div className="flex items-center">
                        <MessageSquare className="mr-2 w-4 h-4" />
                        <span className="font-semibold">{phrase.kategori}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Batak Script */}
                        <div className="flex-shrink-0">
                          <div className="text-4xl font-bold text-primary font-serif text-center md:text-left">
                            {phrase.aksara}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                          {/* Transliteration */}
                          <div>
                            <span className="text-sm font-medium text-foreground/60 uppercase tracking-wide">
                              Transliterasi:
                            </span>
                            <p className="text-lg font-semibold text-foreground">
                              "{phrase.transliterasi}"
                            </p>
                          </div>

                          {/* Meaning */}
                          <div>
                            <span className="text-sm font-medium text-foreground/60 uppercase tracking-wide">
                              Arti:
                            </span>
                            <p className="text-foreground">{phrase.arti}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {Object.keys(filteredGroupedPhrases).length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl p-12 shadow-lg border border-gray-200 max-w-md mx-auto">
              <Search className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Tidak ada hasil
              </h3>
              <p className="text-foreground/60">
                Coba gunakan kata kunci lain atau pilih kategori yang berbeda
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FrasaBatak;
