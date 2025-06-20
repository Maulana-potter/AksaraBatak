import React from "react";
import Navbar from "../components/Navbar";
import IntroPengenalan from "../components/IntroPengenalan";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SejarahAksaraBatak from "../components/SejarahAksaraBatak";
import StrukturSistemTulisan from "../components/StrukturSistemTulisan";

const PengenalanPages = () => {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          judul="Pengenalan Aksara Batak"
          deskripsi="Kenali bentuk, fungsi, dan sejarah Aksara Batak sebagai warisan budaya Nusantara."
          halamanSaatIni="Pengenalan"
        />
        <IntroPengenalan />
        <SejarahAksaraBatak />
        <StrukturSistemTulisan />
      </main>
      <Footer />
    </>
  );
};

export default PengenalanPages;
