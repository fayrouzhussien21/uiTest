import Movies from "./Movies";
import React, { useState, useEffect } from 'react';
import useCounter from "../hooks/counterhook";
import { useSelector ,useDispatch } from "react-redux";
function Movieitems() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch({ type:"get"})
  },[])
  const ctx=useSelector(state=>state.movies);
  const counter=useCounter(false);
  console.log(counter);
  return (
        <div className="container">
                    <div className="row justify-content-center">
          { ctx.map((movie)=><Movies key={movie.id}  id={movie.id} poster_path={movie.poster_path} title={movie.title} description={movie.overview} ></Movies>
        )}
        <button className="btn btn-success">{counter}</button>
              </div>
          </div>
        
        )
  
}
export default Movieitems;