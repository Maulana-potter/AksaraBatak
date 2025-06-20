import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Panduan from "../components/Panduan";
import Teks from "../components/Teks";
import Sejarah from "../components/Sejarah";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Panduan />
        <Teks />
        <Sejarah />
      </main>

      <Footer />
    </>
  );
}

export default Home;
