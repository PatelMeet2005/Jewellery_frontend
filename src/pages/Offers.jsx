import React from 'react';
import { FiClock, FiTag, FiGift } from 'react-icons/fi';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Summer Special",
      description: "Get 20% off on all gold jewellery",
      validUntil: "2024-08-31",
      code: "SUMMER20",
      image: "/images/offers/summer-special.jpg",
      type: "discount"
    },
    {
      id: 2,
      title: "Wedding Collection",
      description: "Buy 1 get 1 free on selected bridal sets",
      validUntil: "2024-12-31",
      code: "BRIDALBOGO",
      image: "/images/offers/wedding-collection.jpg",
      type: "bogo"
    },
    {
      id: 3,
      title: "New Customer Offer",
      description: "Flat ₹5000 off on first purchase above ₹50,000",
      validUntil: "2024-12-31",
      code: "WELCOME5000",
      image: "/images/offers/new-customer.jpg",
      type: "flat"
    },
    {
      id: 4,
      title: "Festival Special",
      description: "Extra 5% off on all diamond jewellery",
      validUntil: "2024-10-31",
      code: "DIAMOND5",
      image: "/images/offers/festival-special.jpg",
      type: "discount"
    }
  ];

  const getOfferIcon = (type) => {
    switch (type) {
      case 'discount':
        return <FiTag className="text-red-500" />;
      case 'bogo':
        return <FiGift className="text-green-500" />;
      case 'flat':
        return <FiTag className="text-blue-500" />;
      default:
        return <FiTag className="text-gray-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Special Offers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                {getOfferIcon(offer.type)}
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{offer.title}</h2>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-1" />
                  <span>Valid until: {new Date(offer.validUntil).toLocaleDateString()}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Code: {offer.code}</span>
              </div>
              
              <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300">
                Apply Offer
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Terms & Conditions</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Offers cannot be combined with other promotions</li>
          <li>Valid only on full-priced items</li>
          <li>Minimum purchase amount may apply</li>
          <li>Offers are subject to change without notice</li>
          <li>Valid only on selected items</li>
        </ul>
      </div>
    </div>
  );
};

export default Offers; 