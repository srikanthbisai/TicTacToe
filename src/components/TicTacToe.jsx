import "../App.css";
import UseTicTacToe from "../hooks/UseTicTacToe";

function TicTacToe() {
  const { board, handleClick, resetGame, getStatusMessage } = UseTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>Reset Game</button>
      </div>

      <div className="board">
        {board.map((b, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)} // Corrected: wrapped in an anonymous function
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
