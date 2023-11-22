import React, { useContext, useState } from "react";

import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import Quote from "../quote/Quote";
import gameStart from "./gameStart.css"

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);
  const [show,setShow] = useState(false);

  return (
    <div>
      <div className="box">
        <div className="start">
          <div className="startHeader">
            <Xicon />
            <Oicon />
          </div>
          <div className="card shadow-gray one">
            <h1 className="text-lg">PICK PLAYER </h1>
            <div className="startPlayers">
              <span
                className={activeUser === "x" ? "startPlayers--active" : ""}
                onClick={() => setActiveUser("x")}
              >
                <Xicon color={activeUser === "x" ? "dark" : "light"} />
              </span>
              <span
                className={activeUser === "o" ? "startPlayers--active" : ""}
                onClick={() => setActiveUser("o")}
              >
                <Oicon color={activeUser === "o" ? "dark" : "light"} />
              </span>
            </div>
          </div>
          <div className="startButtons">
            <button
              className="btn btn-yellow startYe"
              onClick={() => handleStart("cpu")}
            >
              NEW GAME (VS CPU)
            </button>
            <button
              className="btn btn-blue startbl"
              onClick={() => handleStart("user")}
            >
              {" "}
              NEW GAME (VS HUMAN) Coming Soon
            </button>
            <button className="invite-btn" onClick={()=>setShow(!show)}>Invite your friend</button>
            <div >
              { 
                show? <h2 className="copiedLink">Invite link copied </h2> : null
              }
            </div>
          </div>
        </div>
      </div>
      <Quote/>
    </div>
  );
};

export default Start;
