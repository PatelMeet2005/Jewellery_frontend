import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../Authentication/LoginContext";
import LoginCard from "../Authentication/LoginCard";
import SignupCard from "../Authentication/SignupCard";
import JewelleryDropdown from "./JewelleryDropdown";
import UserProfile from "./UserProfile";
import MobileMenu from "./MobileMenu";
import UserLoggedIn from "./UserLoggedIn";
import UserLoggedOut from "./UserLoggedOut";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [jewelleryOpen, setJewelleryOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const timeoutId = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");
    if (email) {
      setUser({
        firstName: email.split("@")[0],
        email: email,
      });
    }
  }, []);

  const isLoggedIn = Boolean(user && user.firstName);

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
    PURITY: {
      "18K": ["18K Gold Collection"],
      "22K": ["22K Gold Collection"],
      "24K": ["24K Gold Collection"],
    },
  };

  const handleLogout = () => {
    // Logout function to clear session and navigate to home or login page
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("userEmail");
    setUser(null);
    navigate("/"); // Redirect to home page or login page after logout
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

  // Close profile menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileOpen && !event.target.closest(".profile-menu")) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [profileOpen]);

  return (
    <>
      <nav className="bg-white py-2 px-4 shadow-md border-b border-gray-200 sticky top-0 z-50 w-full">
        <div className="container mx-auto flex items-center justify-center relative h-14">
          {/* Centered Navigation Items */}
          <div className="flex items-center space-x-6 md:space-x-8">
            {/* Jewellery */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (timeoutId.current) clearTimeout(timeoutId.current);
                setJewelleryOpen(true);
              }}
              onMouseLeave={() => {
                timeoutId.current = setTimeout(
                  () => setJewelleryOpen(false),
                  300
                );
              }}
            >
              <div className="text-gray-600 text-base font-medium hover:text-gray-900 cursor-pointer transition duration-300">
                Jewellery
              </div>

              {jewelleryOpen && (
                <div
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-10"
                  style={{ display: jewelleryOpen ? "block" : "none" }}
                >
                  <JewelleryDropdown
                    categories={categories}
                    handleProductClick={handleProductClick}
                  />
                </div>
              )}
            </div>

            {/* Offers */}
            <Link
              to="/offers"
              className="text-gray-600 text-base font-medium hover:text-gray-900 transition duration-300"
            >
              Offers
            </Link>

            {/* Logo */}
            <Link to="/" className="mx-2">
              <img
                src="/images/logo/logo.png"
                alt="Logo"
                className="h-11 w-auto"
              />
            </Link>

            {/* About Us */}
            <Link
              to="/about"
              className="text-gray-600 text-base font-medium hover:text-gray-900 transition duration-300"
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className="text-gray-600 text-base font-medium hover:text-gray-900 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* User Section */}
          <div className="absolute right-4">
            {isLoggedIn ? (
              <button
                className="text-gray-600 font-medium hover:text-gray-900 transition duration-300"
                onClick={() => navigate("/profile")} // Directing to the profile page
              >
                {user.firstName.charAt(0).toUpperCase() +
                  user.firstName.slice(1)}{" "}
                {/* Capitalizing the first letter */}
              </button>
            ) : (
              <UserLoggedOut onLoginClick={handleLoginClick} />
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute left-4">
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
