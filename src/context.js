import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import axios from "axios"

const movieContext = React.createContext();
const moviesUrl = "http://api.tvmaze.com/shows";
const movies_infoUrl = "http://api.tvmaze.com/shows/20";

export const MovieProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [movie, setMovie] = useState([]);

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

    // useEffect(() => {
    //   const unsuscirbe = auth.onAuthStateChanged((user) => {
    //     setCurrentUser(user);
    //   });
    //   return unsuscirbe;
    // }, []);
  //////// firebase authentication ends here ///////////////

  useEffect(() => {
    axios.get(moviesUrl).then((res) => {
     const movies = res.data;
      setMovies(movies);
      setLoading(false)
    });
  }, []);

    useEffect(() => {
      axios.get(movies_infoUrl).then((res) => {
        const movie = res.data;
        setMovie([movie]);
        setLoading(false);
      });
    }, []);
  
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
        movies,
        setMovies,
        loading,
        search,
        setSearch,
        movie, setMovie,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export const useMovieConsumer = () => {
  return useContext(movieContext);
};
