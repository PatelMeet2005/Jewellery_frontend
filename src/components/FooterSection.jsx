import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full overflow-hidden px-4 md:px-10 flex flex-col md:flex-row justify-between items-start text-sm">
      {/* Left Section */}
      <div className="w-full md:w-2/3 flex flex-col gap-3 mb-8 md:mb-0">
        <img src="/images/logo/logo.png" alt="Logo" className="w-32" />
        <p className="text-gray-400">123, Main Street, Your City</p>
        <p className="text-gray-400">Owner: John Doe</p>
        <p className="text-gray-400">+123 456 7890 | +987 654 3210</p>
        
        {/* Social Icons */}
        <div className="flex space-x-4 mt-2">
          <a href="#" className="text-red-500 text-xl"><FaFacebookF /></a>
          <a href="#" className="text-red-500 text-xl"><FaTwitter /></a>
          <a href="#" className="text-red-500 text-xl"><FaYoutube /></a>
          <a href="#" className="text-red-500 text-xl"><FaInstagram /></a>
          <a href="#" className="text-green-500 text-xl"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3">
        <h2 className="text-lg font-semibold text-gray-300">FEEDBACK</h2>
        <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-500 outline-none text-white py-1 mt-2" />
        <input type="text" placeholder="Mobile No:" className="w-full bg-transparent border-b border-gray-500 outline-none text-white py-1 mt-2" />
        <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-500 outline-none text-white py-1 mt-2" />
        <select className="w-full bg-transparent border-b border-gray-500 outline-none text-white py-1 mt-2">
          <option className="bg-gray-900 text-white">Feedback Type</option>
        </select>
        <button className="mt-4 border border-red-500 text-red-500 px-4 py-1">SUBMIT</button>
      </div>
    </footer>
  );
}
