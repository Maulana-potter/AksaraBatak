import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import FrasaBatak from "../components/FrasaBatak";

const TeksPages = () => {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          judul="Teks Aksara Batak"
          deskripsi="Jelajahi koleksi teks Aksara Batak yang kaya akan nilai budaya dan sejarah."
          halamanSaatIni="Teks"
        />
        <FrasaBatak />
      </main>
      <Footer />
    </>
  );
};

export default TeksPages;
