import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Addmovie = () => {
    const navigate=useNavigate();
    const [movieitem,setmovieitem] = useState({
      "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      "poster_path": "/4avmIRBBOs9b4DKoenf8SWWJJP7.jpg",
      "title": "The Super Mario Bros. Movie",
    });

    const FormInputHandler=(e)=>{
        setmovieitem((p)=>{
            return({...p,[e.target.name]:e.target.value});
        })
      
}

const sendMovieHandler=(e)=>{
    e.preventDefault();
        console.log(movieitem);
        axios.post("http://localhost:3000/movies",movieitem).then(es=>{
        alert("added successfully!");
        navigate("/");
}).catch((e)=>{console.log(e.message)})

}


    return (
       <div className="row align-items-center  justify-content-center mt-5" >
        <h3  className="col-7" style={{color:"white"}}>Enter the movie details:</h3>
            <form className="col-7 card" onSubmit={sendMovieHandler}>
 
  <div className="mb-3">
    <label htmlFor="TITLE" className="form-label">Title</label>
    <input type="text" name="title" className="form-control" id="TITLE" onChange={FormInputHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="image" className="form-label">Image source</label>
    <input type="text" name="poster_path" className="form-control" id="image" onChange={FormInputHandler}/>
  </div>
  <div className="mb-3 input-group">
  <label  className="input-group-text" >Description</label>
  <textarea  className="form-control" name="overview" aria-label="Description" onChange={FormInputHandler}></textarea>
</div>
  <button type="submit" className=" mb-3 btn btn-primary">Add</button>
</form>
</div>
    );
};

export default Addmovie;