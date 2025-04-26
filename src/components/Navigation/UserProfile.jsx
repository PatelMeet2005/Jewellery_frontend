import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useEffect, useRef } from "react";

const UserProfile = ({ 
  profileOpen, 
  setProfileOpen, 
  user, 
  logout, 
  onLoginClick, 
  onSignupClick 
}) => {
  const isLoggedIn = Boolean(user && user.firstName);
  const profileRef = useRef(null);

  // Handle clicks outside the profile to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    if (profileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileOpen, setProfileOpen]);

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

  if (isLoggedIn) {
    return (
      <div className="relative" ref={profileRef}>
        <button 
          className="cursor-pointer focus:outline-none"
          onClick={handleProfileClick}
        >
          <div
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 text-black font-medium"
            style={{ fontSize: '1.2rem' }}
          >
            {user.firstName.charAt(0).toUpperCase()}
          </div>
        </button>

        {profileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md border border-gray-200 rounded-md z-50">
            <div className="p-3 border-b border-gray-200">
              <p className="font-medium text-gray-800">{user.firstName}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setProfileOpen(false)}
            >
              View Profile
            </Link>
            <button
              onClick={() => {
                logout();
                setProfileOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <button
        className="cursor-pointer text-gray-700 text-2xl hover:text-gray-900 focus:outline-none"
        onClick={onLoginClick}
      >
        <FiUser />
      </button>
    );
  }
};

export default UserProfile;