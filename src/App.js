import React from "react";
import { useState } from "react";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import ResectBtn from "./components/ResectBtn";
export default function App() {
  const Winning_State = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setxPlaying] = useState(true);
  const [scores, setScores] =useState ({ xScore:0, oScore:0 });
  const [gameover,setGameover]=useState(false);
  const handleClick = (boxId) => {
    const updateBoard = board.map((value, index) => {
      if (index == boxId) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinning(updateBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1
        setScores({ ...scores, xScore });
      }
    }
    
    setBoard(updateBoard);
    setxPlaying(!xPlaying);
  };
  const checkWinning = (board) => {
    for (let i = 0; i < Winning_State.length; i++) {
      const [x, y, z] = Winning_State[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameover(true);
        return board[x];
      }
    }
  
  };
  const Reset = () =>{
    setGameover(false);
    setBoard(Array(9).fill(null));
   }

  return (
    <div>
      <Scoreboard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameover ? Reset : handleClick} />
      <ResectBtn reset={Reset} />
    </div>
  );
}
