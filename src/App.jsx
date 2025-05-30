import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Navbar/Footer";
import Features from "./pages/Features/Features";
import Pricing from "./pages/Pricing/Pricing";
import Blog from "./pages/Blog/Blog";
import { Analytics } from '@vercel/analytics/react'; // ✅ Import here

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
      <Analytics /> 
    </div>
  );
};

export default App;
