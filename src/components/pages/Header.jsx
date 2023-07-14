import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import treeLogo from "../../assets/treehorizon.jpg";
import { Close, MenuOpenOutlined } from "@mui/icons-material";
import '../styles/Header.css'
export const Header = () => {

const[open,setOpen] = useState(false)

const showMenu = () => {
  setOpen(!open)
}

  return (
    <div className="header">
      <div className="header-logo">
        <img src={treeLogo} alt="Logo" className="rounded-full"/>
      </div>
      <div className={`hamburger-icon `}>
        <MenuOpenOutlined className={open ? "icon" : "hidden"} onClick={showMenu}/>
      </div>
      <nav>
        <ul className={open ?   "list-items backdrop-blur-sm bg-white/30  active" : "list-items"}>

            <div className="close-icon">
                <Close className="icon" onClick={showMenu}/>
            </div>


          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Destination</Link>
          </li>
          <li>
            <Link to="/">Designs</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
