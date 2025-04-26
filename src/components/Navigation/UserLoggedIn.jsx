import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const UserLoggedIn = ({ user, logout }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    // Close the profile menu if clicked outside
    const handleClickOutside = (event) => {
      if (profileOpen && profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [profileOpen]);

  const handleProfileClick = () => {
    setProfileOpen((prev) => !prev);  // Toggle profile menu
  };

  // Capitalize the first letter of the first name
  const capitalizeFirstLetter = (name) => {
    if (name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return "";
  };

  return (
    <div className="relative">
      {/* Profile Icon/Avatar */}
      <button
        className="text-gray-800 text-lg"
        onClick={handleProfileClick}
      >
        {capitalizeFirstLetter(user.firstName[0])} {/* Show capitalized first letter of the user's first name */}
      </button>

      {/* Profile/Signout Dropdown */}
      {profileOpen && (
        <div
          ref={profileMenuRef}
          className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-50"
        >
          <div className="px-4 py-2 text-gray-800">
            <Link to="/profile" className="block text-sm">View Profile</Link>
            <button
              onClick={logout}  // Logout function passed as prop
              className="block w-full text-left text-sm text-red-500"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLoggedIn;
