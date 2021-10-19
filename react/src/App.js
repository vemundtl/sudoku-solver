import logo from "./logo.svg";
import "./App.css";
import Board from "./Board.js";
import Alert from "./Alert";
import Puzzle from "./puzzles";
import { useState } from "react";
import puzzles from "./puzzles";
import generator from "sudoku";

const generateSudoku = () => {
  const raw = generator.makepuzzle();
  const result = { rows: [] };
  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 * j];
      const col = {
        row: i,
        col: j,
        value: { value },
        readOnly: value !== null,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
};

const [boardState, setBoardState] = useState(generateSudoku);

function App() {
  return (
    <div className="">
      <header className="app2">
        <Board boardState={boardState} />
        {alert && <Alert />}
      </header>
    </div>
  );
}

export default App;
