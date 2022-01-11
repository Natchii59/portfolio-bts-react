import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Competences from "./pages/Competences/Competences";
import BtsSio from "./pages/BtsSio/BtsSio";

function App() {
  let location = useLocation();
  const paths = ["/", "/competences", "/bts-sio"];

  return (
    <>
      {paths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/bts-sio" element={<BtsSio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
