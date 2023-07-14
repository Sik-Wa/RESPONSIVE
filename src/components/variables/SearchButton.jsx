import { Close } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import '../styles/SearchButton.css'
const SearchButton = ({isActive}) => {
  return (
    <div className="SearchButton backdrop-blur-sm bg-white/50 space-x-1  rounded-md fixed ">
      <div className="close-modal  text-center flex p-3">
        <Close className="icon cursor-pointer"onClick={isActive}   />
      </div>
      <div className="input fixed justify-center px-4">
        <input   type="text" placeholder="Click Me" />
        <button >NEXT</button>
      </div>
    </div>
  );
};

export default SearchButton;
