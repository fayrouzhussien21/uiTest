import { createStore } from "redux";
import { useState, useEffect } from "react";
let movies = [{ poster_path: "", id: "", description: "", title: "" }];
const reducerfunc = (
  state = {
    movies,
  },
  action
) => {
  if (action.type === "get") {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((movie) => (movies = [...movie]));
    return {
      movies: movies,
    };
  }
  return state;
};
const store = createStore(reducerfunc);
export default store;
