import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import axios from "axios"
import {useQuery} from 'react-query';

const movieContext = React.createContext();
const moviesUrl = "http://api.tvmaze.com/shows";
const movies_infoUrl = "http://api.tvmaze.com/shows/20";
//const movie_date = "http://api.tvmaze.com/schedule?country=US&date=2020-12-24";
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
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [check, setCheck] = useState(true);
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

    useEffect(() => {
      const unsuscirbe = auth.onAuthStateChanged((user) => {
        setCheck(false)
        setCurrentUser(user);
      });
      return unsuscirbe;
    }, []);
  //////// firebase authentication ends here ///////////////

  // const { isLoading, error, data } = useQuery(movies, () => {
  //     fetch(moviesUrl).then((res) => res.json())
  //     console.log(data);
  //   }
    
  // );

     const { isLoading, error, data } = useQuery("repoData", () => {
        fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) =>
          res.json()
        );
        console.log(data)
     }
       
     );

  // useEffect(() => {
  //   axios.get(moviesUrl).then((res) => {
  //    const movies = res.data;
  //     setMovies(movies);
  //     setLoading(false)
  //   });
  // }, []);

    useEffect(() => {
      axios.get(movies_infoUrl).then((res) => {
        const movie = res.data;
        setMovie([movie]);
        setLoading(false);
      });
    }, []);

    function getMovie(id){
     const singeleMovie = movies.find(movie =>movie.id === id) 
     return singeleMovie
     
    }

    function detailMovie(id){
      const detailM = getMovie(id)
      setMovie([detailM]);
    }

  
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
        movies,
        setMovies,
        loading,
        search,
        setSearch,
        movie,
        setMovie,
        detailMovie,
        input,
        setInput,
      }}
    >
      {!check &&  children }
    </movieContext.Provider>
  );
};

export const useMovieConsumer = () => {
  return useContext(movieContext);
};
