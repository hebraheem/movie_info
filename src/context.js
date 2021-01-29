import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";

const movieContext = React.createContext();

const initialValue = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  conPass: "",
};

const loginValue = {
  email: "",
  password: "",
};

export const MovieProvider = ({ children }) => {
  const [input, setInput] = useState(initialValue);
  const [logInput, setLogInput] = useState(loginValue);
  const [currentUser, setCurrentUser] = useState("");
  const [check, setCheck] = useState(true);
  const [search, setSearch] = useState("");

  /// firebase authentication starts here ///////////
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
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
    const unsuscirbe = auth.onAuthStateChanged((user) => {
      setCheck(false);
      setCurrentUser(user);
    });
    return unsuscirbe;
  }, []);
  //////// firebase authentication ends here //////////////

  return (
    <movieContext.Provider
      value={{
        currentUser,
        login,
        signup,
        logout,
        logInput,
        setLogInput,
        resetPassword,
        updatePassword,
        updateEmail,
        search,
        setSearch,
        input,
        setInput,
      }}
    >
      {!check && children}
    </movieContext.Provider>
  );
};

export const useMovieConsumer = () => {
  return useContext(movieContext);
};
