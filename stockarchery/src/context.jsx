import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API ="https://backendapi-production-1726.up.railway.app/service";

const initialState = {
  name: "",
  image: "",
  paragraph: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "STOCK ARCHERY",
        image: "./images/hero.svg",
        paragraph: "Welcome to Stock Archery, your ultimate destination for Trading knowledge and Sucess.",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "We are Stock Archery",
        image: "./images/about1.svg",
        paragraph: " first of its kind, we offer live trading classes where students can learn and trade in real-time. This unique approach combines education with practical trading experience, providing a hands-on learning environment.",
      },
    });
  };

  // To get the API data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // To call the API
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
