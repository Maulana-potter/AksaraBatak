import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pengenalan from "./pages/Pengenalan";
import Panduan from "./pages/Panduan";
import Teks from "./pages/Teks";
import Sejarah from "./pages/Sejarah";
import Tentang from "./pages/Tentang";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pengenalan" element={<Pengenalan />} />
      <Route path="/panduan" element={<Panduan />} />
      <Route path="/teks" element={<Teks />} />
      <Route path="/sejarah" element={<Sejarah />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
