import { createContext } from "react";
import PropTypes from "prop-types";  // Importing PropTypes
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctors,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

// Adding PropTypes validation
AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Validating that children is required
};

export default AppContextProvider;
