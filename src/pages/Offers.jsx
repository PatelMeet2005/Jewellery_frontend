import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  isProductInWishlist,
} from "../utils/wishlist";
import { i } from "framer-motion/client";
import ProceedToPayButton from "../components/ProceedToPayButton";

const Offers = () => {
  const [offersData, setOffersData] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("http://localhost:8000/admin/getOffers");
        const data = await response.json();
        console.log("Fetched Offers:", data.data);
        setOffersData(data.data);

        const wishlist = getWishlist();
        setWishlistItems(wishlist.map((item) => item._id));
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };
    fetchOffers();
  }, []);

  const calculateDiscountedPrice = (originalPrice, discount) => {
    return (originalPrice - originalPrice * (discount / 100)).toFixed(2);
  };

  const handleWishlistClick = (offer) => {
    if (wishlistItems.includes(offer._id)) {
      removeFromWishlist(offer._id);
      setWishlistItems(wishlistItems.filter((id) => id !== offer._id));
    } else {
      addToWishlist(offer);
      setWishlistItems([...wishlistItems, offer._id]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Special Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offersData.map((offer) => (
          <div
            key={offer._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={`http://localhost:8000/${offer.productId?.productImage}`}
                alt={offer.productId?.productName}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => handleWishlistClick(offer)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <FiHeart
                  className={
                    wishlistItems.includes(offer._id)
                      ? "text-red-500"
                      : "text-gray-600"
                  }
                />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {offer.productId?.productName}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {offer.productId?.productDescription}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 text-sm">
                  Weight: {offer.productId?.productWeight}
                </span>
                <span className="text-gray-500 text-sm">
                  Purity: {offer.productId?.productPurity}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 text-sm line-through mr-2">
                    ₹{offer.productId?.productPrice}
                  </span>
                  <span className="text-xl font-bold text-green-600">
                    ₹
                    {calculateDiscountedPrice(
                      offer.productId?.productPrice,
                      offer.discount
                    )}
                  </span>
                </div>
                <ProceedToPayButton
                  product={{
                    _id: offer.productId?._id,
                    productName: offer.productId?.productName,
                    productDescription: offer.productId?.productDescription,
                    productImage:offer.productId?.productImage,
                    productPrice: calculateDiscountedPrice(
                      offer.productId?.productPrice,
                      offer.discount
                    ),
                    productWeight: offer.productId?.productWeight,
                    productPurity: offer.productId?.productPurity,
                  }}
                />
              </div>
              <div className="mt-2">
                <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                  Save {offer.discount}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
