import React, { useContext } from "react";
import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import Modal from './Modal.css';

const Win = () => {
  const { winner, handleNextRound, handleReset } = useContext(GameContext);
  return (
    <div className="last">
      <div className="score">
      {winner && winner !== "no" ? (
        <>
          <p>YOU WON!</p>
          <h3
            className={`scoreTittle ${
              winner === "o" ? "text-yellow" : "text-blue"
            } `}
          >
            {winner === "x" && <Xicon />}
            {winner === "o" && <Oicon />}
            Takes the round
          </h3>
        </>
      ) : (
        <h3 className="scoreTittle text-yellow">No Winner !</h3>
      )}
      <div className="scoreButton">
        <button className="btn quit" onClick={handleReset}>
          Quit
        </button>
        <button
          className={`btn play ${
            winner === "x" ? "btn-blue" : "btn-yellow"
          }`}
          onClick={handleNextRound}
        >
          NEXT ROUND
        </button>
      </div>
    </div>
    </div>
  );
};

export default Win;
