import { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (userData && token) {
      try {
        const parsedUserData = JSON.parse(userData);
        setUser(parsedUserData);

        // Here, you can add token validation if necessary
        // For example, you could decode the token or check with the backend
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    setLoading(false);
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

      localStorage.setItem('user', JSON.stringify(data.data));
      localStorage.setItem('token', data.token);
      setUser(data.data);
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
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign in');
      }

      localStorage.setItem('user', JSON.stringify(data.data));
      localStorage.setItem('token', data.token);
      setUser(data.data);
      return data;
    } catch (error) {
      throw new Error(error.message || 'Error signing in');
    }
  };

  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
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
