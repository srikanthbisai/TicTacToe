import "../App.css"; // Keep this for any additional CSS
import UseTicTacToe from "../hooks/UseTicTacToe";

function TicTacToe() {
  const { board, handleClick, resetGame, getStatusMessage } = UseTicTacToe();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="status mb-4 text-xl font-bold">
        {getStatusMessage()}
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board grid grid-cols-3 gap-2">
        {board.map((b, index) => (
          <button
            key={index}
            className="cell w-24 h-24 text-4xl font-bold border border-gray-500 hover:bg-gray-300"
            onClick={() => handleClick(index)} 
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
