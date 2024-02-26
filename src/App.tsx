import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AboutUs from "./sections/AboutUs";
import Cards from "./components/Cards";
import EvolutionArea from "./sections/EvolutionArea";
import Footer from "./components/Footer";

import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Partners from "./sections/Partners";
import ServiceArea from "./sections/ServiceArea";
import TopBox from "./sections/TopBox";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <NavMobile />
        <Routes>
          <Route path="/" index element={<TopBox />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<ServiceArea />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
