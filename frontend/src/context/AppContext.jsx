import { createContext } from 'react';
import PropTypes from 'prop-types';
import { doctors, specialityData } from '../assets/assets'; // Ensure correct asset import

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = '₹';
  const value = {
    doctors,
    specialityData,
    currencySymbol,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
