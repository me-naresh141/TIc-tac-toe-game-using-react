import React, { useState } from "react";
// components
import Header from "./Header";
import Board from "./Board";
import PlayerInfo from "./PlayerInfo";
import "../index.css";
// confetti
import Confetti from "react-confetti";

const App = () => {
  const [state, setstate] = useState(Array(9).fill(null));

  const [isXTurn, setIsXTurn] = useState(true);

  // confetti animation
  const [isConfetti, setIsConfetti] = useState(false);

  //  score state
  const [player1, setPlayer1] = useState(0);
  const [tie, setTie] = useState(0);
  const [player2, setPlayer2] = useState(0);

  const [computerScore, setComputerScore] = useState(0);

  // select computer state
  const [computer, setComputer] = useState(false);

  // handle reset function
  const handleReset = () => {
    setPlayer1(0);
    setPlayer2(0);
    setTie(0);
    setIsConfetti(false);
    setstate(Array(9).fill(null));
    setIsXTurn(true);
  };

  // handle Computer function

  const HandleComputer = () => {
    setComputer(!computer);
    setPlayer1(0);
    setPlayer2(0);
    setstate(Array(9).fill(null));
  };
  return (
    <div className="parent-div">
      {isConfetti && <Confetti />}

      <Header />
      <Board
        setstate={setstate}
        state={state}
        setIsXTurn={setIsXTurn}
        isXTurn={isXTurn}
        setIsConfetti={setIsConfetti}
        player1={player1}
        player2={player2}
        tie={tie}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        setTie={setTie}
        setComputer={setComputer}
        computer={computer}
      />
      <PlayerInfo
        handleReset={handleReset}
        player1={player1}
        player2={player2}
        tie={tie}
        setstate={setstate}
        HandleComputer={HandleComputer}
        computer={computer}
      />
    </div>
  );
};

export default App;
