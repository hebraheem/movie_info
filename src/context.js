import React, { useContext } from "react";

const movieContext = React.createContext();

export const MovieProvider = ({ children }) => {
    const hello = {
        name: "ibrahim"
    }
  return (
    <movieContext.Provider value={{hello}}>
      {children}
    </movieContext.Provider>
  );
};

export const useMovieConsumer = () => {
  return useContext(movieContext);
};
