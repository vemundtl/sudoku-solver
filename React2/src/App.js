import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import generator from "sudoku";
import Board from "./Board";

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

function App() {
  const [boardState, setBoardState] = useState(generateSudoku);
  return (
    <div className="">
      <header className="app2">
        <Board sudoku={boardState} />
      </header>
    </div>
  );
}

export default App;
