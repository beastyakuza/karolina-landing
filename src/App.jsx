import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}
