import React, { useEffect, useState } from "react";
import { FiUser, FiMail, FiCalendar, FiMapPin, FiShoppingBag, FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");
    if (email) {
      setUser({
        firstName: email.split("@")[0],
        email: email,
        joinDate: new Date().toLocaleDateString(), // Dummy join date
      });
    }
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem("userEmail");
    navigate("/");
    window.location.reload(); // Reload the page to reflect the new user state
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Please log in to view your profile</h2>
          <p className="text-gray-600">You need to be logged in to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="h-40 bg-gradient-to-r from-red-500 to-red-700 relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-red-600 text-5xl font-bold">
                  {user.firstName.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-16 pb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
            </h1>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <p className="text-gray-600 flex items-center">
                <FiMail className="mr-2" />
                {user.email}
              </p>
              <span className="text-gray-300">•</span>
              <p className="text-gray-600 flex items-center">
                <FiCalendar className="mr-2" />
                Member since {user.joinDate}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-red-50 p-3 rounded-lg">
                <FiShoppingBag className="text-red-500 text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">Total Orders</p>
                <h3 className="text-2xl font-bold text-gray-800">12</h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-red-50 p-3 rounded-lg">
                <FiHeart className="text-red-500 text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">Wishlist Items</p>
                <h3 className="text-2xl font-bold text-gray-800">8</h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-red-50 p-3 rounded-lg">
                <FiMapPin className="text-red-500 text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">Saved Addresses</p>
                <h3 className="text-2xl font-bold text-gray-800">3</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
