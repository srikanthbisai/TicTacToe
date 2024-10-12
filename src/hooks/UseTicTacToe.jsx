import React from 'react'

const initialBoard = () => Array(9).fill(null);

function useTicTacToe() {
  const [board, setBoard] = useState(initialBoard());
  const [isNext, setIsNext] = useState(true);

  const WINNING_PATTERNS = [];
  const calculateWinner = () => {};
  const handleClick = () => {};
  const getStatusMessage = () => {};
  const resetGame = () => {};

  return 
    {board, handleClick, calculateWinner, getStatusMessage, resetGame};
};

export default useTicTacToe;
