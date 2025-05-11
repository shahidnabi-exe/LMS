import { createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = (props) => {
  const value = {
    // Add your global state or methods here
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
