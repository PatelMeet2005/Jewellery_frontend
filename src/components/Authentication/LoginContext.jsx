import { nav } from 'framer-motion/client';
import { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // This will check for the user in localStorage when the app first loads
  useEffect(() => {
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    // If there is user data and token, set the user to the context state
    if (userData && token) {
      try {
        const parsedUserData = JSON.parse(userData);
        setUser(parsedUserData);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    setLoading(false); // We are done with the loading process now
  }, []);

  const signUp = async (email, password, firstName, lastName, confirmPassword) => {
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }
    try {
      const response = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userFirstName: firstName,
          userLastName: lastName,
          userEmail: email,
          userPassword: password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up');
      }

      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(data.data));
      localStorage.setItem('token', data.token);
      setUser(data.data); // Update user state

      return data;
    } catch (error) {
      throw new Error(error.message || 'Error signing up');
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: email, userPassword: password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign in');
      }
  
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(data.data));
      localStorage.setItem('token', data.token);
      sessionStorage.setItem('userEmail', email); // Save email to sessionStorage
      setUser(data.data); // Update user state
  
      // 🚀 After successful login, now check if admin
      if (email === "admin@gmail.com") {
        window.location.href = "/admin"; // Redirect to admin page
      } else {
        window.location.reload(); // Normal user: reload to reflect login
      }
  
      return data;
    } catch (error) {
      throw new Error(error.message || 'Error signing in');
    }
  };
  

  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null); // Clear the user state when logged out
  };

  return (
    <LoginContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};
