import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = '₹';
    
    // Define your backend URL here
    const backendUrl = 'http://localhost:4000';  // Adjust this according to your server's URL and port

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        return age;
    };

    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_');
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
    };

    // Add backendUrl to value object
    const value = {
        calculateAge,
        slotDateFormat,
        currency,
        backendUrl  // Added this line
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
