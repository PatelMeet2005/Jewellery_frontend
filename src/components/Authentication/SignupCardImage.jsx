const SignupCardImage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-lg shadow-lg text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Community</h2>
        <p className="text-lg mb-6">
          Join thousands of satisfied customers who trust us for their jewellery needs
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
            <span className="text-white font-bold">1</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Member Benefits</h3>
            <p className="text-indigo-100">
              Get access to special discounts, early sales, and member-only collections
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
            <span className="text-white font-bold">2</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
            <p className="text-indigo-100">
              Receive tailored recommendations based on your preferences and purchase history
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
            <span className="text-white font-bold">3</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Priority Support</h3>
            <p className="text-indigo-100">
              Enjoy dedicated customer service and faster response times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCardImage; 