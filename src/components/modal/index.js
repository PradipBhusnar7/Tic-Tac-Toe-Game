import React, { useContext } from "react";
import Win from "./Win";
import Restart from "./Restart";
import { ModalContext } from "../../context/ModalContext";
import style from './Modal.css'

const Modal = () => {
  const { show, modaleModel } = useContext(ModalContext);

  return (
    <div className={`modal ${!show && "closed"}`}>
      <div className="modalContent">
        <div className="container">
          {modaleModel === "winner" && <Win />}
          {modaleModel === "start" && <Restart />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
