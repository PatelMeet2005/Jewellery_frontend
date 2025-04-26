import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { AboutUs } from "./components/Aboutus";
import { LoginProvider } from "./components/Authentication/LoginContext";
import { Footer } from "./components/FooterSection";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
// Import Category Pages
import Ring from './Product/category/Ring';
import Earrings from './Product/category/Earrings';
import Necklaces from './Product/category/Necklaces';
import Bracelets from './Product/category/Braceletes';

// Import Metal Pages
import Gold from './Product/metal/Gold';
import Silver from './Product/metal/Silver';
import Platinum from './Product/metal/Platinum';

// Import Purity Pages
import Purity18k from './Product/purity/18k';
import Purity22k from './Product/purity/22k';
import Purity24k from './Product/purity/24k';

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
          <Route path="/about" element={<><Navigation /><AboutUs /><Footer /></>} />
          <Route path="/offers" element={<><Navigation /><Offers /><Footer /></>} />
          <Route path="/contact" element={<><Navigation /><Contact /><Footer /></>} />

           {/* Category Routes */}
        <Route path="/rings" element={<><Navigation /><Ring /><Footer /> </>} />
        <Route path="/earrings" element={<><Navigation /><Earrings /><Footer /></>} />
        <Route path="/necklaces" element={<><Navigation /><Necklaces /><Footer /></>} />
        <Route path="/bracelets" element={<><Navigation /><Bracelets /><Footer /></>} />

        {/* Metal Routes */}
        <Route path="/gold" element={<><Navigation /><Gold /> <Footer /></>}/>
        <Route path="/silver" element={<><Navigation /><Silver /> <Footer /></>}/>
        <Route path="/platinum" element={<><Navigation /><Platinum /><Footer /></>} />

        {/* Purity Routes */}
        <Route path="/18k" element={<><Navigation /><Purity18k /><Footer /></>} />
        <Route path="/22k" element={<><Navigation /><Purity22k /><Footer /></>} />
        <Route path="/24k" element={<><Navigation /><Purity24k /><Footer /></>} />
          
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
