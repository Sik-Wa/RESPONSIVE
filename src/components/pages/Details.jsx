import React from "react";
import { Link } from "react-router-dom";
import '../styles/Details.css'
const Details = () => {
  return (
    <div className="details">
      <div className="details-text">
        <h1>FIND OUT WHAT'S <span>NEW</span></h1>


        <p>Register to our Website for FREE!!!!</p>
        <p>Enjoy and experience new beginnings</p>
        <p>Fill out the necessary documentaion</p>
        <p>Get a glimps of the Universe here</p>
        <p>What are you waiting</p>
        <p>Reviews help us grow and enhance your user experience</p>
        <div className="done-btn ">
            <Link to='/' >Enter</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
