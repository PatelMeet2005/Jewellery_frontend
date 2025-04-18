import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../context/LoginContext';
import LoginCard from '../components/Authentication/LoginCard';
import SignupCard from '../components/Authentication/SignupCard';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useLogin();
  const navigate = useNavigate();

  // If user is already logged in, redirect to home
  if (user) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Sign in to your account' : 'Create a new account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Or{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                create a new account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isLogin ? (
            <LoginCard 
              onClose={() => {}} 
              onSwitchToSignup={() => setIsLogin(false)}
              isModal={false}
            />
          ) : (
            <SignupCard 
              onClose={() => {}} 
              onSwitchToSignup={() => setIsLogin(true)}
            />
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
};

export default LoginPage; 