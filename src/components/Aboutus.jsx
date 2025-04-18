import React from "react";

export function AboutUs () {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Discover the story behind Elegant Jewelry and our commitment to crafting timeless pieces.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Elegant Jewelry was founded in 2010 with a vision to create exquisite, handcrafted jewelry that tells a story. Our journey began in a small workshop, where passion and precision came together to create pieces that celebrate life's most precious moments.
          </p>
          <p className="text-gray-600">
            Today, we are proud to serve customers worldwide, offering a curated collection of rings, necklaces, bracelets, and more. Each piece is a testament to our dedication to quality and craftsmanship.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create timeless, elegant jewelry that inspires and empowers our customers, while maintaining the highest standards of craftsmanship and sustainability.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's most trusted and beloved jewelry brand, known for our exceptional designs and unwavering commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 - Vraj Patel */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-600">
              VP
            </div>
            <h3 className="text-xl font-bold">Vraj Patel</h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
          </div>

          {/* Team Member 2 - Meet Patel */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-600">
              MP
            </div>
            <h3 className="text-xl font-bold">Meet Patel</h3>
            <p className="text-gray-600">Creative Director</p>
          </div>

          {/* Team Member 3 - Manav Patel */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-600">
              MP
            </div>
            <h3 className="text-xl font-bold">Manav Patel</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>

          {/* Team Member 4 - Trush Patel */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-600">
              TP
            </div>
            <h3 className="text-xl font-bold">Trush Patel</h3>
            <p className="text-gray-600">Marketing Lead</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-400 mb-8">
            Explore our collection and become a part of the Elegant Jewelry family.
          </p>
          <a
            href="/"
            className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};