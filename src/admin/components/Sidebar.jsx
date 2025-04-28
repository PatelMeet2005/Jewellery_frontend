import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaBoxOpen, FaPercent, FaSignOutAlt, FaGift } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    sessionStorage.removeItem("userEmail");
    navigate("/");
    window.location.reload(); // Force refresh after logout
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt /> },
    { name: "Add Product", path: "/admin/add-product", icon: <FaBoxOpen /> },
    { name: "Manage Products", path: "/admin/products", icon: <FaBoxOpen /> },
    { name: "Add Offer", path: "/admin/add-offer", icon: <FaGift /> },
    { name: "Manage Offers", path: "/admin/offers", icon: <FaPercent /> },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="p-6 text-3xl font-bold tracking-wide border-b border-gray-700">
        Admin Panel
      </div>
      <div className="flex-1 p-4 space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200
            ${
              location.pathname === item.path
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            {item.icon}
            <span className="text-md">{item.name}</span>
          </Link>
        ))}

        {/* Logout Button */}
        <button
          onClick={handleSignOut}
          className="flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 w-full text-left"
        >
          <FaSignOutAlt />
          <span className="text-md">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
