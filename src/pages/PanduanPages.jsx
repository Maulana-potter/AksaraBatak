import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import DasarAksaraBatak from "../components/DasarAksaraBatak";
import LatihanMenulis from "../components/LatihanMenulis";
import TataBahasaBatak from "../components/TataBahasaBatak";
import BudayaMaknaSosialAksaraBatak from "../components/BudayaMaknaSosialAksaraBatak";

const PanduanPages = () => {
  return (
    <div>
      <Navbar />
      <main>
        <PageHeader
          judul="Panduan Penggunaan"
          deskripsi="Pelajari cara membaca, menulis, dan memahami struktur Aksara Batak secara bertahap dan mudah."
          halamanSaatIni="Panduan"
        />
        <DasarAksaraBatak />
        <LatihanMenulis />
        <TataBahasaBatak />
        <BudayaMaknaSosialAksaraBatak />
      </main>
      <Footer />
    </div>
  );
};

export default PanduanPages;
