import { Link } from "react-router-dom";
import { useLogin } from "../Authentication/LoginContext";
import { FiUser } from "react-icons/fi";

const UserProfile = ({ profileOpen, setProfileOpen, onLoginClick }) => {
  const { user, signOut } = useLogin();

  const handleMouseEnter = () => setProfileOpen(true);
  const handleMouseLeave = () => setProfileOpen(false);

  return (
    <div className="absolute right-4 md:right-6">
      {user ? (
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="cursor-pointer">
            <img
              src={user.photoURL || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-gray-300"
            />
          </button>

          {profileOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white shadow-md border border-gray-200 rounded-md"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="p-3 border-b border-gray-200">
                <p className="font-medium text-gray-800">{user.name || 'User'}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                View Profile
              </Link>
              <button
                onClick={signOut}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          className="cursor-pointer text-gray-700 text-2xl hover:text-gray-900"
          onClick={onLoginClick}
        >
          <FiUser />
        </button>
      )}
    </div>
  );
};

export default UserProfile;
