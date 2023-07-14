import React, { useState } from "react";
import "../styles/Section.css";
import { Link } from "react-router-dom";
import { Planets } from "../variables/Planets";
import { Nature } from "../variables/Nature";
import { Space } from "../variables/Space";
import SearchButton from '../variables/SearchButton';

export const Section = () => {
  const [text, setText] = useState("first-con");
  const [isModalActive,setIsModalActive] = useState(false);
  const isActive = () =>  {
    setIsModalActive(!isModalActive)
  }

  return (
    <div className="section">
      <div>
        <div className="change-box backdrop-blur-sm bg-white/30 rounded-md p-2 justify-evenly gap-x-20 flex  ">
          <button
            className="state-change-btn"
            onClick={() => setText("first-con")}
          >
            Planets
          </button>
          <button
            className="state-change-btn"
            onClick={() => setText("second-con")}
          >
            Nature
          </button>
          <button
            className="state-change-btn"
            onClick={() => setText("third-con")}
          >
            Space
          </button>
        </div>

        <div>
          {text === "first-con" && <Planets />}
          {text === "second-con" && <Space />}
          {text === "third-con" && <Nature />}

          <div className="button">
            <Link onClick={isActive}
              to="/"
              className="backdrop-blur-sm bg-white/30 rounded-md px-1 p-1 paddding-inline-2  "
            >
              SEARCH
            </Link>
          </div>
{isModalActive && <SearchButton isActive={isActive}/>}   
        </div>
      </div>
    </div>
  );
};
