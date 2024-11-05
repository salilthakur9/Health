import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { specialityData } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext(); 
const AppContextProvider = ({ children }) => {
  const currencySymbol = '₹';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);

  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'): false)

  const [userData, setUserData]= useState(false)



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

  const loadUserProfileData = async ()=>{
    try {
      const {data}= await axios.get(backendUrl + '/api/user/get-profile', {headers:{token}})
      if(data.success){
        setUserData(data.userData)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error); // Log for debugging
      toast.error(error.message);
    }
  }

  const value = {
    doctors, getDoctorsData,
    specialityData,
    currencySymbol,
    token,setToken,
    backendUrl,
    userData, setUserData,
    loadUserProfileData
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(()=>{
    if(token){
      loadUserProfileData()
    }else{
      setUserData(false)
    }
  },[token])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


// Default export for AppContextProvider
export default AppContextProvider;
