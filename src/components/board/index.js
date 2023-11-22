import React, { useContext } from "react";
import { GameContext } from "../../context/GameContex";
import { ModalContext } from "../../context/ModalContext";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import BoardCard from "./BoardCard";
import Quote from "../quote/Quote";

const Board = () => {
  const { showModal, setModalMode } = useContext(ModalContext);

  const handleRestart = () => {
    showModal();
    setModalMode("start");
  };

  const { squares, winner, winnerLine, xnext, ties, activeUser, playMode } =
    useContext(GameContext);

  const checkUser = (user) => {
    if (playMode === "cpu") {
      if (user === activeUser) {
        return "(You)";
      } else {
        return "(CPU)";
      }
    }
  };

  return (
    <div className="cboard">
      <div className="board">
        <div className="boardHeader">
          <div className="upperxo">
            <Xicon />
            <Oicon />
          </div>
          <div className="boardTurn">
            {!xnext ? (
              <Xicon color="light" size="sm" />
            ) : (
              <Oicon color="light" size="sm" />
            )}
            turn
          </div>
          <div>
            <button
              className="btn btn-sm boardRestart"
              onClick={handleRestart}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_15_259)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.32 0.0289756C8.70071 -0.0888534 10.0884 0.153982 11.347 0.733693C12.6056 1.31341 13.6921 2.21011 14.5 3.33598V1.74998C14.5 1.55106 14.579 1.3603 14.7197 1.21965C14.8603 1.07899 15.0511 0.999976 15.25 0.999976C15.4489 0.999976 15.6397 1.07899 15.7803 1.21965C15.921 1.3603 16 1.55106 16 1.74998V5.99998H11.75C11.5511 5.99998 11.3603 5.92096 11.2197 5.78031C11.079 5.63965 11 5.44889 11 5.24998C11 5.05106 11.079 4.8603 11.2197 4.71965C11.3603 4.57899 11.5511 4.49998 11.75 4.49998H13.477C12.7931 3.42988 11.8107 2.58356 10.6512 2.06556C9.4917 1.54757 8.20584 1.38058 6.95248 1.58524C5.69912 1.7899 4.53316 2.35723 3.59864 3.21715C2.66412 4.07708 2.00198 5.19192 1.694 6.42398C1.67128 6.52076 1.62955 6.61206 1.57123 6.69257C1.51291 6.77308 1.43917 6.84119 1.35429 6.89294C1.26942 6.9447 1.1751 6.97906 1.07682 6.99403C0.97854 7.00901 0.878265 7.0043 0.781825 6.98017C0.685385 6.95604 0.594703 6.91298 0.515053 6.8535C0.435404 6.79401 0.368375 6.71928 0.317865 6.63366C0.267355 6.54803 0.234371 6.45322 0.220832 6.35473C0.207293 6.25625 0.213469 6.15605 0.239 6.05998C0.643544 4.4424 1.5434 2.99166 2.81279 1.91052C4.08218 0.82939 5.65766 0.171906 7.319 0.0299756L7.32 0.0289756ZM3.92 14.881C4.99199 15.5164 6.19758 15.8925 7.44068 15.9795C8.68378 16.0665 9.93001 15.8618 11.08 15.3819C12.23 14.902 13.252 14.1601 14.0646 13.2153C14.8771 12.2704 15.4577 11.1489 15.76 9.93997C15.805 9.74817 15.7728 9.54635 15.6702 9.37814C15.5676 9.20993 15.403 9.08883 15.2119 9.04101C15.0207 8.9932 14.8185 9.02251 14.6488 9.12261C14.4791 9.22271 14.3556 9.38557 14.305 9.57598C13.9969 10.8078 13.3347 11.9223 12.4002 12.782C11.4658 13.6417 10.3 14.2089 9.04688 14.4136C7.79373 14.6182 6.50809 14.4513 5.34871 13.9336C4.18933 13.4158 3.20699 12.5698 2.523 11.5H4.25C4.44891 11.5 4.63968 11.421 4.78033 11.2803C4.92098 11.1397 5 10.9489 5 10.75C5 10.5511 4.92098 10.3603 4.78033 10.2196C4.63968 10.079 4.44891 9.99998 4.25 9.99998H0V14.25C0 14.4489 0.0790176 14.6397 0.21967 14.7803C0.360322 14.921 0.551088 15 0.75 15C0.948912 15 1.13968 14.921 1.28033 14.7803C1.42098 14.6397 1.5 14.4489 1.5 14.25V12.664C2.14478 13.5623 2.96879 14.3172 3.92 14.881Z"
                    fill="#3F5560"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_259">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
            </button>
          </div>
        </div>
        <div className="boardBody">
          {squares.map((sq, ix) => (
            <BoardCard
              key={ix}
              user={sq}
              index={ix}
              active={winner && winnerLine && winnerLine.includes(ix)}
            />
          ))}
        </div>
        <div className="boardFooter">
          <div className="card bg-blue foot">
            <p className="text-light">X {checkUser("x")}</p>
            <strong className="text-2xl"> {ties.x} </strong>
          </div>
          <div className="card bg-light foot">
            <p className="text-light">Ties</p>
            <strong className="text-2xl"> {ties.x + ties.o} </strong>
          </div>
          <div className="card bg-yellow foot">
            <p className="text-light">O {checkUser("o")}</p>
            <strong className="text-2xl"> {ties.o}</strong>
          </div>
        </div>
      </div>
      <Quote />
    </div>
  );
};

export default Board;
