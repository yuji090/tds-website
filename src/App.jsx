import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import igaming from "./assets/igaming.svg";
import ecomm from "./assets/ecomm.png";
import finn from "./assets/fin.jpg";
import travel from "./assets/travel.png";
import apps from "./assets/apps.jpg";
import "./App.css";

function PageTransition({ children }) {
  return (
    <>
      {children}

      <motion.div
        className="page-transition"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <motion.div
        className="page-transition page-transition-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const images = [
      finn,
      igaming,
      ecomm,
      travel,
      apps,
      "/verticals/consumer.jpg",
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;

      if (img.decode) {
        img.decode().catch(() => {});
      }
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;