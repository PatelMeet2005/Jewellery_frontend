const LoginCardImage = () => {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-600 to-purple-600 p-8 flex flex-col justify-center">
      <div className="text-white">
        <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
        <p className="text-lg mb-6">
          Sign in to access your account and continue shopping
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold">1</span>
            </div>
            <span>Access your personalized dashboard</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold">2</span>
            </div>
            <span>View your order history</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold">3</span>
            </div>
            <span>Manage your wishlist</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCardImage; 