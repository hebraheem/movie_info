import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";

const movieContext = React.createContext();

export const MovieProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
    /// firebase authentication starts here ///////////
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInUserWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

   function updateEmail(email) {
     return currentUser.updateEmail(email);
   }

  useEffect(() => {
    const unsuscirbe = auth.onAuthStateChange((user) => {
      setCurrentUser(user);
    });
    return unsuscirbe;
  }, []);
  //////// firebase authentication ends here ///////////////
  return (
    <movieContext.Provider
      value={{
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updatePassword,
        updateEmail,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export const useMovieConsumer = () => {
  return useContext(movieContext);
};
