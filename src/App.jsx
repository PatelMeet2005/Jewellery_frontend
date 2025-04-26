import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Chain from "./Product/Chain";
import Ring from "./Product/Ring";
import Gold from "./Product/Gold";
import { AboutUs } from "./components/Aboutus";
import { LoginProvider } from "./components/Authentication/LoginContext";
import { Footer } from "./components/FooterSection";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";

// Admin imports
import Sidebar from "./admin/components/Sidebar";
import Dashboard from "./admin/pages/Dashboard";
import AddProduct from './admin/pages/AddProduct';
import ManageProducts from "./admin/pages/ManageProducts";
import AddOffer from "./admin/pages/AddOffer";
import ManageOffers from "./admin/pages/ManageOffers";

function App() {
  return (
    <LoginProvider>
      <Router>
        {/* Routes for User */}
        <Routes>
          <Route path="/" element={<><Navigation /><Home /><Footer /></>} />
          <Route path="/profile" element={<><Navigation /><Profile /><Footer /></>} />
          <Route path="/chains" element={<><Navigation /><Chain /><Footer /></>} />
          <Route path="/rings" element={<><Navigation /><Ring /><Footer /></>} />
          <Route path="/gold" element={<><Navigation /><Gold /><Footer /></>} />
          <Route path="/about" element={<><Navigation /><AboutUs /><Footer /></>} />
          <Route path="/offers" element={<><Navigation /><Offers /><Footer /></>} />
          <Route path="/contact" element={<><Navigation /><Contact /><Footer /></>} />
          
          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <div className="flex">
                <Sidebar />
                <div className="admin-content">
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="products" element={<ManageProducts />} />
                    <Route path="add-offer" element={<AddOffer />} />
                    <Route path="offers" element={<ManageOffers />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </LoginProvider>
  );
}

export default App;
