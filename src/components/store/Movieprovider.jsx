import { createContext, useReducer } from 'react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import MoviesContext from './Movie-context'
import axios from 'axios';

const Moviesprovider =(props)=>{
// const Moviesprovider=createContext(MoviesContext);
  const [movies,setMovies]=useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(movie => setMovies(movie));
  }, []);

const moviesctx={
  movies:movies
}
   return <MoviesContext.Provider value={moviesctx}>{props.children}</MoviesContext.Provider>
}
export default Moviesprovider;