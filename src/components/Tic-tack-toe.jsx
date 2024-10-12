import { useState } from "react";
import "../App.css";
import useTickTackToe from "../hooks/UseTicTacToe";

function TicTacToe() {
  
 const board = useTicTacToe 
 return (
    <div className="game">
      <div className="status">
           Player X Turn
           <button className="reset-button">Reset Game</button>
      </div>

      <div className="board">
       {board.map((_, i) =>(
          <button key={i} className="cell">X</button>
       ))}
      </div>
    </div>
  );
}

export default TicTacToe;
