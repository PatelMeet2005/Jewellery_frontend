import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Chain from "./Product/Chain";
import Ring from "./Product/Ring";
import Gold from "./Product/Gold";
import { AboutUs } from "./components/Aboutus";
import { LoginProvider } from "./context/LoginContext";
import { Footer } from "./components/FooterSection";
import LoginPage from "./pages/LoginPage";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";

function App() {
  return (
    <LoginProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chains" element={<Chain />} />
          <Route path="/rings" element={<Ring />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </LoginProvider>
  );
}

export default App;
