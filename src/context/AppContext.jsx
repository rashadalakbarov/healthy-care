import { createContext } from "react";
import { doctorsData } from "../datas/doctors";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctorsData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
