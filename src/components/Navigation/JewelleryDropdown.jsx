import { Link } from "react-router-dom";

const JewelleryDropdown = ({ categories, handleProductClick }) => {
  return (
    <div
      className="absolute left-0 mt-2 w-[90vw] max-w-7xl bg-white shadow-xl border border-gray-200 rounded-lg transform -translate-x-1/4 transition-all duration-300 ease-in-out"
      style={{
        background: 'linear-gradient(to right, #ffffff, #f8f9fa)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="flex p-8">
        {/* JEWELLERY Column */}
        <div className="w-2/5 pr-8 border-r border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-500 inline-block">JEWELLERY</h3>
          <div className="space-y-3">
            {Object.keys(categories.JEWELLERY).map((category) => (
              <Link
                key={category}
                to={`/${category.toLowerCase()}`}
                className="block text-sm text-gray-600 hover:text-red-600 hover:translate-x-1 transform transition-all duration-200 ease-in-out"
                onClick={() => handleProductClick(category)}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* METALS Column */}
        <div className="w-1/5 px-8 border-r border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-yellow-500 inline-block">METALS</h3>
          <div className="space-y-3">
            {Object.keys(categories.METALS).map((category) => (
              <Link
                key={category}
                to={`/${category.toLowerCase()}`}
                className="block text-sm text-gray-600 hover:text-yellow-600 hover:translate-x-1 transform transition-all duration-200 ease-in-out"
                onClick={() => handleProductClick(category)}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* PURITY Column */}
        <div className="w-1/5 pl-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500 inline-block">PURITY</h3>
          <div className="space-y-3">
            {Object.keys(categories.PURITY).map((category) => (
              <Link
                key={category}
                to={`/${category.toLowerCase()}`}
                className="block text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 transform transition-all duration-200 ease-in-out"
                onClick={() => handleProductClick(category)}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Section at Bottom */}
      <div className="bg-gray-50 p-4 mt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Explore our latest collection</p>
        </div>
      </div>
    </div>
  );
};

export default JewelleryDropdown; 