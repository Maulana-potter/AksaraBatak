import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PengenalanPages from "./pages/PengenalanPages";
import PanduanPages from "./pages/PanduanPages";
import TeksPages from "./pages/TeksPages";
import SejarahPages from "./pages/SejarahPages";

import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pengenalan" element={<PengenalanPages />} />
      <Route path="/panduan" element={<PanduanPages />} />
      <Route path="/teks" element={<TeksPages />} />
      <Route path="/sejarah" element={<SejarahPages />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
