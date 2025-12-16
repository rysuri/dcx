import styles from "./css/App.module.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <NavBar />
      <main className={`${styles.container} main-content`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
