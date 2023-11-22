import React, { useContext } from "react";
import { GameContext } from "../../context/GameContex";
import { ModalContext } from "../../context/ModalContext";
import Modal from './Modal.css';

const Restart = () => {
  const { hideModal } = useContext(ModalContext);
  const { handleReset } = useContext(GameContext);
  return (
    <div className="restart">
      <h3 className="restartTittle">Do you want to quit ?</h3>
      <div className="restartButtons">
        <button className="btn replay" onClick={hideModal}>
        PLAY AGAIN
        </button>
        <button className="btn btn-yellow requit " onClick={handleReset}>
        QUIT
        </button>
      </div>
    </div>
  );
};
export default Restart;
