import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { specialityData } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext(); // Named export for AppContext

const AppContextProvider = ({ children }) => {
  const currencySymbol = '₹';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);

  const value = {
    doctors,
    specialityData,
    currencySymbol,
  };

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.response); // Log for debugging
      console.log("Backend URL:", backendUrl); // Should show "http://localhost:4000"

      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


// Default export for AppContextProvider
export default AppContextProvider;
