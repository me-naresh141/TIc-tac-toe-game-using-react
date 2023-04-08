import React from "react";

const PlayerInfo = ({
  player1,
  player2,
  tie,
  handleReset,
  HandleComputer,
  computer,
}) => {
  return (
    <div>
      {/* 1 */}
      <div className="playerInfo-div">
        {/*  player 1 */}
        <div>
          <h5>Player 1</h5>
          <p>{player1}</p>
        </div>
        {/*  tie*/}
        <div className="playerHeadingDiv">
          <h5>Tie</h5>
          <p>{tie}</p>
        </div>
        {/* player 2 */}
        <div>
          <h5>{computer ? "Computer" : "player2"}</h5>
          <p>{player2}</p>
        </div>
      </div>
      {/* 2 */}
      <div>
        <button onClick={handleReset}>reset</button>
        <button onClick={HandleComputer}>
          {computer ? "player2" : "Computer"}
        </button>
      </div>
    </div>
  );
};

export default PlayerInfo;
