import React, { useState, useEffect } from "react";
import Square from "./Square";

const Board = ({
  state,
  setstate,
  isXTurn,
  setIsXTurn,
  setPlayer1,
  setPlayer2,
  setTie,
  player1,
  player2,
  tie,
  setIsConfetti,
}) => {
  // handleClick function
  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    let stateCopy = [...state];
    stateCopy[index] = isXTurn ? "X" : "0";
    setstate(stateCopy);

    setIsXTurn(!isXTurn);
  };

  //  checkWinner function
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        setIsConfetti(true);
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  // handlePlayAgain function
  const handlePlayAgain = () => {
    // console.log("okk");
    setstate(Array(9).fill(null));
    setIsXTurn(true);
    setIsConfetti(false);
  };

  // TieMatch function
  function TieMatch({ handlePlayAgain }) {
    return (
      <div>
        <strong> your match is Tie</strong>
        <button onClick={handlePlayAgain}>play Again</button>
      </div>
    );
  }

  // PlayerTime function
  function PlayerTime({ isXTurn }) {
    return (
      <h1>
        {" "}
        Player{isXTurn ? <strong>1</strong> : <strong>2</strong>} is move
      </h1>
    );
  }

  // Squares function
  function Squares({ handleClick, state }) {
    return (
      <div className="board">
        <div className="flex">
          <div className="row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </div>
      </div>
    );
  }

  // Disable Square function
  function DisableSquare({ handleClick, state }) {
    return (
      <div className="disable-div board">
        <div className="row disable">
          <Square onClick={() => handleClick(0)} value={state[0]} />
          <Square onClick={() => handleClick(1)} value={state[1]} />
          <Square onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <div className="row disable">
          <Square onClick={() => handleClick(3)} value={state[3]} />
          <Square onClick={() => handleClick(4)} value={state[4]} />
          <Square onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <div className="row disable">
          <Square onClick={() => handleClick(6)} value={state[6]} />
          <Square onClick={() => handleClick(7)} value={state[7]} />
          <Square onClick={() => handleClick(8)} value={state[8]} />
        </div>
      </div>
    );
  }
  // usseEffect

  useEffect(() => {
    if (isWinner) {
      {
        isXTurn ? setPlayer2(player2 + 1) : setPlayer1(player1 + 1);
      }
      return;
    }
    let tieMatch = state.every((a) => a);
    if (tieMatch) {
      setTie(tie + 1);
    }
  }, [isXTurn, state]);

  return (
    <>
      {isWinner ? (
        <div className="winnerDiv">
          {/* 1 */}
          <div>
            <strong className="winner-heading">
              Player {isXTurn ? "2" : "1"}winner
            </strong>
            <button onClick={handlePlayAgain}> Play again</button>
          </div>
          {/* 2 */}
          <DisableSquare
            handleClick={handleClick}
            state={state}
            isXTurn={isXTurn}
          />
        </div>
      ) : state.every((a) => a) ? (
        <>
          <TieMatch handlePlayAgain={handlePlayAgain} />
          <Squares handleClick={handleClick} state={state} isXTurn={isXTurn} />
        </>
      ) : (
        <>
          {" "}
          <PlayerTime isXTurn={isXTurn} />
          <Squares handleClick={handleClick} state={state} isXTurn={isXTurn} />
        </>
      )}
    </>
  );
};

export default Board;
