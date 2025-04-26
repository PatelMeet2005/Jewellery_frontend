import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from '../Authentication/LoginContext';
import LoginCard from "../Authentication/LoginCard";
import SignupCard from "../Authentication/SignupCard";
import JewelleryDropdown from "./JewelleryDropdown";
import UserProfile from "./UserProfile";
import MobileMenu from "./MobileMenu";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [jewelleryOpen, setJewelleryOpen] = useState(false);
  const timeoutId = useRef(null);  // Fixed by adding useRef here
  const navigate = useNavigate();
  const { user, logout } = useLogin();

  const categories = {
    JEWELLERY: {
      RINGS: ["Engagement Rings", "Wedding Rings", "Fashion Rings"],
      EARRINGS: ["Studs", "Hoops", "Drops"],
      NECKLACES: ["Pendants", "Chains", "Chokers"],
      BRACELETS: ["Bangles", "Cuffs", "Charm Bracelets"],
    },
    METALS: {
      GOLD: ["Yellow Gold", "White Gold", "Rose Gold"],
      SILVER: ["Sterling Silver", "Oxidized Silver"],
      PLATINUM: ["Platinum Rings", "Platinum Chains"],
    },
    WEDDING: {
      BRIDAL: ["Bridal Sets", "Wedding Bands"],
      ENGAGEMENT: ["Solitaire", "Halo", "Three Stone"],
    },
    FOR: {
      WOMEN: ["Women's Collection"],
      MEN: ["Men's Collection"],
      KIDS: ["Kids' Collection"],
    },
    PURITY: {
      "18K": ["18K Gold Collection"],
      "22K": ["22K Gold Collection"],
      "24K": ["24K Gold Collection"],
    },
  };

  const handleProductClick = () => {
    setJewelleryOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleSignupClick = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  const handleSwitchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <nav className="bg-white p-4 md:p-6 shadow-md border-b border-gray-200 sticky top-0 z-50 w-full">
        <div className="container mx-auto flex justify-center items-center relative">
          {/* Left Section */}
          <ul className="hidden md:flex space-x-8">
            <li
              className="relative"
              onMouseEnter={() => {
                if (timeoutId.current) clearTimeout(timeoutId.current);
                setJewelleryOpen(true);
              }}
              onMouseLeave={() => {
                timeoutId.current = setTimeout(() => setJewelleryOpen(false), 300);
              }}
            >
              <Link
                to="/jewellery"
                className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"
              >
                Jewellery
              </Link>

              {/* Mega Dropdown Menu */}
              {jewelleryOpen && (
                <JewelleryDropdown 
                  categories={categories}
                  handleProductClick={handleProductClick}
                />
              )}
            </li>
            <li>
              <Link
                to="/offers"
                className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"
              >
                Offers
              </Link>
            </li>
          </ul>

          {/* Logo Centered */}
          <Link to="/" className="mx-5">
            <img 
              src="/images/logo/logo.png" 
              alt="Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Right Section */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/about"
                className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"
              >
                Contact Us
              </Link>
            </li>
          </ul>  

          {/* User Profile/Login Button */}
          <UserProfile 
            profileOpen={profileOpen}
            setProfileOpen={setProfileOpen}
            onLoginClick={handleLoginClick}
            onSignupClick={handleSignupClick}
          />

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu 
            isOpen={isOpen}
            jewelleryOpen={jewelleryOpen}
            setJewelleryOpen={setJewelleryOpen}
            categories={categories}
            handleProductClick={handleProductClick}
          />
        )}
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>
            <LoginCard 
              onClose={handleCloseModal} 
              onSwitchToSignup={handleSwitchToSignup}
              isModal={true}
            />
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>
            <SignupCard 
              onClose={handleCloseModal} 
              onSwitchToSignup={handleSwitchToLogin}
              isModal={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MainNav;
