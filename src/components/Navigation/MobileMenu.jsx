import { Link } from "react-router-dom";
import { useLogin } from "../Authentication/LoginContext";

const MobileMenu = ({ isOpen, jewelleryOpen, setJewelleryOpen, categories, handleProductClick }) => {
  const { user, signOut } = useLogin();

  return (
    <div className="md:hidden bg-white w-full absolute left-0 top-16 shadow-md">
      <div className="p-4">
        <div className="space-y-4">
          <div>
            <button
              onClick={() => setJewelleryOpen(!jewelleryOpen)}
              className="flex items-center justify-between w-full text-left text-gray-600 text-lg font-medium hover:text-gray-900"
            >
              <span>Jewellery</span>
              <span>{jewelleryOpen ? '−' : '+'}</span>
            </button>
            {jewelleryOpen && (
              <div className="mt-2 pl-4 space-y-4">
                {Object.entries(categories).map(([category, items]) => (
                  <div key={category} className="space-y-2">
                    <h3 className="font-bold text-gray-900">{category}</h3>
                    <div className="pl-4 space-y-2">
                      {Object.keys(items).map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/${item.toLowerCase()}`}
                          className="block text-sm text-gray-600 hover:text-gray-900"
                          onClick={() => handleProductClick(item)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/offers" className="block text-gray-600 text-lg font-medium hover:text-gray-900">
            Offers
          </Link>
          <Link to="/about" className="block text-gray-600 text-lg font-medium hover:text-gray-900">
            About Us
          </Link>
          <Link to="/contact" className="block text-gray-600 text-lg font-medium hover:text-gray-900">
            Contact Us
          </Link>
          {user && (
            <>
              <Link to="/profile" className="block text-gray-600 text-lg font-medium hover:text-gray-900">
                Profile
              </Link>
              <button
                onClick={signOut}
                className="block w-full text-left text-gray-600 text-lg font-medium hover:text-gray-900"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
