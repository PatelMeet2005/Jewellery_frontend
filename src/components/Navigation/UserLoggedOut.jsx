import { FiUser } from "react-icons/fi";

const UserLoggedOut = ({ onLoginClick }) => {
  return (
    <button
      className="cursor-pointer text-gray-700 text-2xl hover:text-gray-900 focus:outline-none"
      onClick={onLoginClick}
    >
      <FiUser />
    </button>
  );
};

export default UserLoggedOut;
