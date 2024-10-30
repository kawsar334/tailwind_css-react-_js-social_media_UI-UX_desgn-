import React, { useState } from "react";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 9 squares for the 3x3 board
  const [isXNext, setIsXNext] = useState(true); // X starts first

  const handleClick = (index) => {
    // If the square is already filled or the game is over, return
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext); // Toggle between X and O
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`;

  const handleReset = () => {
    setBoard(Array(9).fill(null)); // Reset board
    setIsXNext(true); // X starts first
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button className="reset" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

// Square component for individual squares
const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

// Calculate the winner of the game
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
