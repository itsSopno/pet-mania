import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import auth from './firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [mainuser, setMainUser] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [main, setMain] = useState([]);
  const [bookingData, setBookingData] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const res = await fetch('/service.json');
        if (!res.ok) throw new Error('Failed to fetch service data');
        const data = await res.json();
        setServices(data);  
        setMain(data);     
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const userInfo = {
    user,
    setUser,
    createUser,
    mainuser,
    setMainUser,
    services,
    loading,
    main,
    bookingData,
    setBookingData,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
