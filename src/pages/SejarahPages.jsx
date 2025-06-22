import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import AsalUsul from "../components/AsalUsul";
import HistoricalTimeline from "../components/historicalTimeline";
import BatakVariantsSection from "../components/BatakVariantsSection";
import GallerySection from "../components/GallerySection";

const SejarahPages = () => {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          judul="Sejarah Aksara Batak"
          deskripsi="Pelajari asal usul dan evolusi Aksara Batak, dari akar budaya hingga perkembangan modern."
          halamanSaatIni="Sejarah"
        />
        <AsalUsul />
        <HistoricalTimeline />
        <BatakVariantsSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
};

export default SejarahPages;
